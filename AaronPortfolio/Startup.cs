using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;
using System.Text;
using Scheduling.AaronPortfolio.Server.Helpers;
using Scheduling.AaronPortfolio.Server.Models;
using Scheduling.AaronPortfolio.Server.Middleware.Authentication;
using Newtonsoft.Json.Serialization;

namespace Scheduling
{

    public class Startup
    {
        public Startup(
            IConfiguration configuration

        //IAuthenticationService _authService,
        //ICommonServices _commonServices,
        //IManageAccountService _manageAccountService,
        //IMapper _mapper,
        //AppSettings appSettings
        )
        {
            Configuration = configuration;
            //_context = new DataContext(settings);
            //_authService = authService;
            //_commonServices = commonServices;
            //_manageAccountService = manageAccountService;
            //_mapper = mapper;
            //_appSettings = appSettings.Value;
        }

        public IConfiguration Configuration { get; }
        //private readonly AppSettings _appSettings;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.Configure<Settings>(options =>
            {
                options.ConnectionString = "mongodb://localhost:27017";
                options.Database = "aaron";

            });
            services.AddAutoMapper();
            services.AddOptions();
            services.AddMvcCore()
                    .AddAuthorization()
                    .AddJsonFormatters(options => options.ContractResolver = new CamelCasePropertyNamesContractResolver());
            services.AddMvc();



            // configure DI for application services
            services.AddScoped<IAuthenticationService, Authentication>();
            services.AddScoped<IRegistrationService, Registration>();
            services.AddScoped<ICommonServices, CommonMethods>();
            services.AddScoped<IManageAccountService, ManageAccount>();

            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            //// configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });





        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // global cors policy
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseAuthentication();
            //app.UseJwtBearerAuthentication();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}

