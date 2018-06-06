using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Scheduling.AaronPortfolio.Server.ViewModels
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class UserViewModel
    {
		public string Username { get; set; }
        [Required]
        [EmailAddress]

        public string Email { get; set; }

        [Required(ErrorMessage ="Password field is required")]

        public string Password { get; set; }

        [Required(ErrorMessage = "Password Confirm field is required")]
        [Compare("Password",ErrorMessage ="Passwords do not match")]
        public string PasswordConfirm { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }

}
