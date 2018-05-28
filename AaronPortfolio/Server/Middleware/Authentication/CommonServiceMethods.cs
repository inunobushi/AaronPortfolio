using System;
using System.Collections.Generic;

namespace AaronPortfolio.Server.Middleware.Authentication
{
    public interface ICommonServices
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
    }

    public class CommonMethods : ICommonServices
    {

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }
    }
}
