using System;
using AutoMapper;
using Scheduling.AaronPortfolio.Server.ViewModels;
using Scheduling.AaronPortfolio.Server.Models;

namespace Scheduling.AaronPortfolio.Server.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserSchema, UserViewModel>();
            CreateMap<UserViewModel, UserSchema>();
        }
    }
}
