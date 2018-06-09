using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Scheduling.AaronPortfolio.Server.Helpers;
using Scheduling.AaronPortfolio.Server.Middleware.Authentication;
using Scheduling.AaronPortfolio.Server.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AaronPortfolio.Server.Controllers.AccountContollers
{
    [Route("api/[controller]")]
    public class RegistrationController : Controller
    {
        private IMapper _mapper;
        private IRegistrationService _registrationService;

        public RegistrationController(IMapper mapper, IRegistrationService registrationService)
        {
            _registrationService = registrationService;
            _mapper = mapper;
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]UserViewModel userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Enter valid data");
            }

            try
            {
                HttpStatusCode result = _registrationService.Create(userDto, userDto.Password);
                switch (result)
                {
                    case HttpStatusCode.NotAcceptable:
                        return BadRequest("username should not have spaces");
                    case HttpStatusCode.Found:
                        return BadRequest("Username already exists");
                    case HttpStatusCode.BadRequest:
                        return BadRequest("User could not be created");
                    default:
                        return Ok("User Created");
                }
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }
    }
}
