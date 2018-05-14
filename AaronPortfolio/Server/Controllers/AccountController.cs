using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AaronPortfolio.Server.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AaronPortfolio.Server.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        
        [HttpPost("register")]
		public void Register([FromBody]UserViewModel user)
		{
			var newUser  = user;
		}
        
		[HttpPost("login")]
        public void Login([FromBody]LoginViewModel user)
        {
            var newUser = user;
        }
    }
}
