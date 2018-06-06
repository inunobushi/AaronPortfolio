using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using MongoDB.Driver;
using Scheduling.AaronPortfolio.Server.Models;
using Scheduling.AaronPortfolio.Server.Helpers;
using Microsoft.Extensions.Options;

namespace Scheduling.AaronPortfolio.Server.Middleware.Authentication
{
    public interface IRegistrationService
    {
        void Create(UserSchema user, string password);
    }

    public class Registration : IRegistrationService
    {

        private DataContext _context;

        public Registration(IOptions<Settings> settings)
        {
            _context = new DataContext(settings);
        }


        public async void Create(UserSchema user, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            var filter = Builders<UserSchema>.Filter.Eq(s => s.Username, user.Username);
            var userResult = _context.Users.Find(filter).FirstOrDefault();

            if (userResult!=null)
                throw new AppException("Username " + user.Username + " is already taken");

            //byte[] passwordHash, passwordSalt;
            //CreatePasswordHash(password, out passwordHash, out passwordSalt);

            //user.PasswordHash = passwordHash;
            //user.PasswordSalt = passwordSalt;

            await _context.Users.InsertOneAsync(user);
        }

        // private helper methods

        //private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        //{
        //    if (password == null) throw new ArgumentNullException("password");
        //    if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

        //    using (var hmac = new System.Security.Cryptography.HMACSHA512())
        //    {
        //        passwordSalt = hmac.Key;
        //        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        //    }
        //}
    }
}
