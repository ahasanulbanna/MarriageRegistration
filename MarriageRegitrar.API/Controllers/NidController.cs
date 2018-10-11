using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MarriageRegistrar.Services.Services_NID;
using MarriageRegitrar.Models.Models_NID;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/Nid")]
    public class NidController : ApiController
    {
        private readonly INidServices _services;

        public NidController()
        {
                _services=new NidServices();
        }
        [Route("CreateNid")]
        [HttpPost]
        public IHttpActionResult CreateNid(NID nid)
        {
            return Ok(_services.CreateNid(nid).Data);
        }
    }
}
