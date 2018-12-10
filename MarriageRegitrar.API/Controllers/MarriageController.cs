using MarriageRegistrar.Services.Dtoes;
using MarriageRegistrar.Services.Marriage_Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/Marriage")]
    public class MarriageController : ApiController
    {
        private readonly IMarriageServices _services;
        public MarriageController()
        {
            _services = new MarriageServices();
        }

        [Route("RegistrarMarriage")]
        [HttpPost]
        public IHttpActionResult RegistrarMarriage(MarriageDto marriageDto)
        {
           return Ok(_services.RegistrarMarriage(marriageDto).Data);
        }
    }
}
