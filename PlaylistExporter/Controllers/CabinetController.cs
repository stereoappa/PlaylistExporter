﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PlaylistExporter.Controllers
{
    public class CabinetController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}