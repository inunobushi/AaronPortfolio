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
using MongoDB.Driver;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AaronPortfolio.Server.Account.Controllers 
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private ICommonServices _commonServices;
        private IManageAccountService _manageAccountService;
        private IMapper _mapper;


        public AccountController(
            ICommonServices commonServices,
            IManageAccountService manageAccountService,
            IMapper mapper
        )
        {
            _commonServices = commonServices;
            _manageAccountService = manageAccountService;
            _mapper = mapper;
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
