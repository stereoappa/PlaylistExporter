using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebUI.Models;

namespace WebUI.Controllers
{
    public class CabinetController : Controller
    {

        //https://music.yandex.ru/import

             
        public IActionResult Index()
        {
            ViewData["MusicHubs"] = new List<MusicHubVM>
            {
                new MusicHubVM { Name = "Deezer"},
                new MusicHubVM { Name = "Yandex Music"}
            };

            return View();
        }
    }
} 