using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using ModelBuilder;
using ModelBuilder.Configuration;
using ModelBuilder.Services;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddDbContext<EHealthDbContext>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
           sqlServerOptionsAction: sqlOptions =>
           {
               sqlOptions.EnableRetryOnFailure();
           }));

// Add services to the container.
builder.Services.AddTransient<ISqlConnectionService, SqlConnectionService>();
builder.Services.AddScoped<IAppsettings, AppSettings>();
builder.Services.AddTransient<IEmailSender, AuthMessageSender>();
builder.Services.AddTransient<ISmsSender, AuthMessageSender>();
builder.Services.Configure<SMSoptions>(builder.Configuration.GetSection("SMSoptions"));

//builder.Services.Configure<SMSoptions>(Configuration);
builder.Services.AddControllersWithViews();
//builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
//builder.Services.AddMediatR(new Type[]{
//                typeof(AssemblyMarker)
//            });

var corsOriginsSection = builder.Configuration.GetSection("CorsOrigins");
var origins = corsOriginsSection.Get<CorsOrigins>();
builder.Services.AddCors(options => options.AddPolicy("AllowSpecificOrigin", p => p
                                    .WithOrigins(origins.Urls)
                                    .AllowAnyHeader()
                                    .WithMethods("PUT", "DELETE", "GET", "POST", "PATCH")));

builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblies(typeof(AssemblyMarker).Assembly));
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "E Health",
        Version = "v1"

    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("../swagger/v1/swagger.json", "AMP3D.Api v1");
    c.RoutePrefix = String.Empty;
});
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
