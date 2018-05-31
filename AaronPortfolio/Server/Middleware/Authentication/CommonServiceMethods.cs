using System;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Scheduling.AaronPortfolio.Server.Helpers;
using Scheduling.AaronPortfolio.Server.Models;

namespace Scheduling.AaronPortfolio.Server.Middleware.Authentication
{
    public interface ICommonServices
    {
        IEnumerable<UserSchema> GetAll();
        UserSchema GetById(string id);
    }

    public class CommonMethods : ICommonServices
    {
        private DataContext _context;
        public CommonMethods(IOptions<Settings> settings)
        {
            _context = new DataContext(settings);
        }

        public IEnumerable<UserSchema> GetAll()
        {
            return _context.Users.Find(_ => true).ToList();
        }

        public UserSchema GetById(string id)
        {
            var filter = Builders<UserSchema>.Filter.Eq(s => s.Id, id);
            return _context.Users.Find(filter).FirstOrDefault();
        }
    }
}
