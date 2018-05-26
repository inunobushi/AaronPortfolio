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
    public class ContactController : Controller
    {
        
        // POST api/values
        [HttpPost("contactdata")]
        public void Post([FromBody] ContactViewModel contactForm)
        {
            var ContactForm = contactForm;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}
