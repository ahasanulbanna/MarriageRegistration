using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MarriageRegistrar.Services.Dtoes;
using MarriageRegistrar.Services.Services_Shared;


namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/MarriageRegistrar")]
    public class MarriageRegistrarController : ApiController
    {
        private readonly IMarriageRegistrarServices _services;

        public MarriageRegistrarController()
        {
            _services=new MarriageRegistrarServices();
            ;
        }

        [Route("CreateMarriageRegistrar")]
        [HttpPost]
        public IHttpActionResult CreateMarriageRegistrar(MarriageRegistrarDto marriageRegistrarDto)
        {
            return Ok(_services.ProcessMarriageRegistrar(marriageRegistrarDto));
        }
    }
}
