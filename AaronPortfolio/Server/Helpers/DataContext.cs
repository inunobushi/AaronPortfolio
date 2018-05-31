using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Scheduling.AaronPortfolio.Server.Models;

namespace Scheduling.AaronPortfolio.Server.Helpers
{
    public class DataContext
    {
        private readonly IMongoDatabase _database = null;

        public DataContext(IOptions<Settings> settings) 
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<UserSchema> Users
        {
            get{
                return _database.GetCollection<UserSchema>("UserSchema");
            }    
        }


    }



        //public class DataContext : DbContext
        //{
        //    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //    public MongoDB.Bson<UserSchema> Users { get; set; }
        //}

}
