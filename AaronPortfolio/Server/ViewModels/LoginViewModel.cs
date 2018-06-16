using System;
namespace Scheduling.AaronPortfolio.Server.ViewModels
{
    public class LoginViewModel
    {
        public string Username
		{
			get;
			set;
		}
        public string Email
        {
            get;
            set;
        }
        public string Password
		{
			get;
			set;
		}
        public object FirstName { get; internal set; }
        public object LastName { get; internal set; }
    }
}
