using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Scheduling.AaronPortfolio.Server.Models;
using Scheduling.AaronPortfolio.Server.Helpers;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Scheduling.AaronPortfolio.Server.Middleware.Authentication
{
    public interface IAuthenticationService
    {
        UserSchema Authenticate(string username, string password);
    }
    public class Authentication : IAuthenticationService
    {
        private DataContext _context;

        public Authentication(IOptions<Settings> settings)
        {
            _context = new DataContext(settings);
        }

        public UserSchema Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var filter = Builders<UserSchema>.Filter.Eq(s => s.Username, username);
            var user =  _context.Users.Find(filter).FirstOrDefault();
            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            //if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                //return null;

            // authentication successful
            return user;
        }
        //private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        //{
        //    if (password == null) throw new ArgumentNullException("password");
        //    if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
        //    if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
        //    if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

        //    using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
        //    {
        //        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        //        for (int i = 0; i < computedHash.Length; i++)
        //        {
        //            if (computedHash[i] != storedHash[i]) return false;
        //        }
        //    }

        //    return true;
        //}
    }
}
