using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Zendesk.Search.Models;

namespace Zendesk.Search.Controllers
{
    public class HomeController : Controller
    {
        private IConfiguration _configuration;

        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            var viewModel = new SearchViewModel
            {
                User = _configuration["Secrets:User"],
                Password = _configuration["Secrets:Password"],
                ItemsPerPage = 10
            };

            return View(viewModel);
        }
    }
}
