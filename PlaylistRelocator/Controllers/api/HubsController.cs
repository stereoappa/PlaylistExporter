using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainModel.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class HubsController : ControllerBase
    {
        public JsonResult GetAllDescriptions()
        {
            var hubs = new List<HubDescription>
            {
                new HubDescription {Id = "dzr", Name = "Deezer"},
                new HubDescription {Id = "yamusic", Name = "Yandex Music"}
            };

            return new JsonResult(hubs);
        }
    }
}