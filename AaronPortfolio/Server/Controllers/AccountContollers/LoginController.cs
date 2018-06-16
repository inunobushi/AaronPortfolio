using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Scheduling.AaronPortfolio.Server.Middleware.Authentication;
using Microsoft.AspNetCore.Mvc;
using Scheduling.AaronPortfolio.Server.ViewModels;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Options;
using Scheduling.AaronPortfolio.Server.Helpers;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Scheduling.AaronPortfolio.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AaronPortfolio.Server.Controllers.AccountContollers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private IAuthenticationService _authService;
        private readonly AppSettings _appSettings;

        public LoginController(
            IAuthenticationService authService,
            IOptions<AppSettings> appSettings
        )
        {
            _authService = authService;
            _appSettings = appSettings.Value;
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody]LoginViewModel user, UserSchema mongo)
        {
            var loginUser = _authService.Authenticate(user.Username, user.Password);

            if (user == null)
            {
                Unauthorized();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, mongo.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                user.Username,
                user.FirstName,
                user.LastName,
                token = tokenString
            });
        }
    }
}
