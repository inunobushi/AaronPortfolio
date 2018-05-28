using System;
using AutoMapper;
using Scheduling.AaronPortfolio.Server.ViewModels;

namespace AaronPortfolio.Server.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserViewModel>();
            CreateMap<UserViewModel, User>();
        }
    }
}
