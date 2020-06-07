using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainModel.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.api
{
    [Route("[controller]")]
    [ApiController]
    public class HubsController : ControllerBase
    {
        [HttpGet]
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