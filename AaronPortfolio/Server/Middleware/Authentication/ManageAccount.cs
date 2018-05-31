using System;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Scheduling.AaronPortfolio.Server.Helpers;
using Scheduling.AaronPortfolio.Server.Models;

namespace Scheduling.AaronPortfolio.Server.Middleware.Authentication
{
    public interface IManageAccountService
    {
        void Update(UserSchema user, string password = null);
        void Delete(string id);
    }
    public class ManageAccount : IManageAccountService
    {

        private DataContext _context;
        public ManageAccount(IOptions<Settings> settings)
        {
            _context = new DataContext(settings);
        }


        public async void Update(UserSchema userParam, string password = null)
        {
            var user = _context.Users.Find(userParam.Id).FirstOrDefault();

            var filter = Builders<UserSchema>.Filter.Eq(s => s.Id, userParam.Id);
            var update = Builders<UserSchema>.Update
                            .Set(s => s.FirstName, userParam.FirstName)
                            .Set(s => s.LastName, userParam.LastName)
                                             .Set(s => s.Username, userParam.Username);

            try
            {
                UpdateResult actionResult
                     = await _context.Users.UpdateOneAsync(filter, update);

            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }


            if (user == null)
                throw new AppException("User not found");

            //if (userParam.Username != user.Username)
            //{
                // username has changed so check if the new username is already taken
                //if (_context.Users.Any(x => x.Username == userParam.Username))
                    //throw new AppException("Username " + userParam.Username + " is already taken");


            //}

            // update user properties
            //user.FirstName = userParam.FirstName;
            //user.LastName = userParam.LastName;
            //user.Username = userParam.Username;

            // update password if it was entered
            //if (!string.IsNullOrWhiteSpace(password))
            //{
            //    byte[] passwordHash, passwordSalt;
            //    CreatePasswordHash(password, out passwordHash, out passwordSalt);

            //    user.PasswordHash = passwordHash;
            //    user.PasswordSalt = passwordSalt;
            //}

            //_context.Users.Update(user);
        }

        public void Delete(string id)
        {
            var user = _context.Users.Find(n=>n.Id == id).FirstOrDefault();
            if (user != null)
            {
                _context.Users.DeleteOneAsync(Builders<UserSchema>.Filter.Eq("Id", id));
            }
        }


        
    }
}
