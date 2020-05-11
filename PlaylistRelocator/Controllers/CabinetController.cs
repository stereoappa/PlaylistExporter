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
            return View();
        }
    }
} 