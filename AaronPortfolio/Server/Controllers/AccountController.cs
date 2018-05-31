using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Scheduling.AaronPortfolio.Server.ViewModels;
using Scheduling.AaronPortfolio.Server.Models;
using Microsoft.Extensions.Logging;
using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Scheduling.AaronPortfolio.Server.Middleware.Authentication;
using Scheduling.AaronPortfolio.Server.Helpers;
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
        private readonly DataContext _context = null;

        public AccountController(
            IAuthenticationService authService,
            IRegistrationService registrationService,
            ICommonServices commonServices,
            IManageAccountService manageAccountService,
            IMapper mapper,
            IOptions<Settings> settings,
            IOptions<AppSettings> appSettings)
        {
            _context = new DataContext(settings);
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
		public void Register([FromBody]UserViewModel userDto)
		{
            var newUser  = _mapper.Map<UserSchema>(userDto);

            try
            {
                // save 
                _registrationService.Create(newUser, userDto.Password);

                Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                BadRequest(ex.Message);
            }
		}

        // POST api/values
        [AllowAnonymous]
		[HttpPost("login")]
        public void Login([FromBody]LoginViewModel user, UserSchema mongo)
        {
            var loginUser = _authService.Authenticate(user.Username, user.Password);

            if (user == null)
            {
                Unauthorized();
            }

            //var tokenHandler = new JwtSecurityTokenHandler();
            //var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            //var tokenDescriptor = new SecurityTokenDescriptor
            //{
            //    Subject = new ClaimsIdentity(new Claim[]
            //    {
            //        new Claim(ClaimTypes.Name, mongo.Id.ToString())
            //    }),
            //    Expires = DateTime.UtcNow.AddDays(7),
            //    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            //};
            //var token = tokenHandler.CreateToken(tokenDescriptor);
            //var tokenString = tokenHandler.WriteToken(token);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _commonServices.GetAll();
            var userDtos = _mapper.Map<IList<UserViewModel>>(users);
            return Ok(userDtos);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var user = _commonServices.GetById(id);
            var userDto = _mapper.Map<UserViewModel>(user);
            return Ok(userDto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody]UserViewModel userDto)
        {
            // map dto to entity and set id
            var user = _mapper.Map<UserSchema>(userDto);
            user.Id = id;

            try
            {
                // save 
                _manageAccountService.Update(user, userDto.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            _manageAccountService.Delete(id);
            return Ok();
        }
    }
}
