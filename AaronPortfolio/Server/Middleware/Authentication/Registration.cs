using System;
using System.Security.Cryptography;
using MongoDB.Driver;
using Scheduling.AaronPortfolio.Server.Models;
using Scheduling.AaronPortfolio.Server.Helpers;
using Microsoft.Extensions.Options;
using System.Net;
using Scheduling.AaronPortfolio.Server.ViewModels;

namespace Scheduling.AaronPortfolio.Server.Middleware.Authentication
{
    public interface IRegistrationService
    {
        HttpStatusCode Create(UserViewModel userDto, string password);
    }

    public class Registration : IRegistrationService
    {

        private DataContext _context;

        public Registration(IOptions<Settings> settings)
        {
            _context = new DataContext(settings);
        }


        public HttpStatusCode Create(UserViewModel userDto, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(userDto.Password))
            {
                return HttpStatusCode.NotAcceptable;
                }

            var filter = Builders<UserSchema>.Filter.Eq(s => s.Username, userDto.Username);
            var userResult = _context.Users.Find(filter).FirstOrDefault();

            if (userResult == null)
                return HttpStatusCode.Found;
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            UserSchema user = new UserSchema()
            {
                Email = userDto.Email,
                FirstName = userDto.FirstName,
                LastName = userDto.LastName,
                Username = userDto.Username,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            try
            {
                _context.Users.InsertOne(user);
                return HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                return HttpStatusCode.BadRequest;
            }

        }

         //private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
