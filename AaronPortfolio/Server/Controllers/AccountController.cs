using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Scheduling.AaronPortfolio.Server.ViewModels;
using Microsoft.Extensions.Logging;
using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using AaronPortfolio.Server.Middleware.Authentication;
using AaronPortfolio.Server.Helpers;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AaronPortfolio.Server.Account.Controllers 
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {

        private IAuthenticationService _authService;
        private IRegistrationService _registrationService;
        private ICommonServices _commonServices;
        private IManageAccountService _manageAccountService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public UsersController(
            IAuthenticationService authService,
            IRegistrationService registrationService,
            ICommonServices commonServices,
            IManageAccountService manageAccountService,
            IMapper mapper,

            IOptions<AppSettings> appSettings)
        {
            _authService = authService;
            _registrationService = registrationService;
            _commonServices = commonServices;
            _manageAccountService = manageAccountService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        
        // POST api/values
        [AllowAnonymous]
        [HttpPost("register")]
		public void Register([FromBody]UserViewModel user)
		{
            var newUser  = _mapper.Map<>(user);

            try
            {
                // save 
                _authService.Create(user, userDto.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
		}

        // POST api/values
        [AllowAnonymous]
		[HttpPost("login")]
        public void Login([FromBody]LoginViewModel user)
        {
            var loginUser = user.Authenticate(user.Username, user.Password);

            if (user == null)
                return Unauthorized();

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
        }
    }
}
