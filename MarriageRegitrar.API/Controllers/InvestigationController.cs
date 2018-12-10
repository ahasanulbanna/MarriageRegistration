using MarriageRegistrar.Services.Investigation_Services;
using MarriageRegitrar.Models;
using System.Web.Http;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/Investigation")]
    public class InvestigationController : ApiController
    {
        private readonly IInvestigationServices _service;
        public InvestigationController()
        {
            _service = new InvestigationServices();
        }
        [Route("CheckBride/{nid}")]
        [HttpGet]
        public IHttpActionResult CheckBride(string nid)
        {
            return Ok(_service.CheckBride(nid).Data);
        }

        [Route("CheckBridegroom/{nid}")]
        [HttpGet]
        public IHttpActionResult CheckBridegroom(string nid)
        {
            return Ok(_service.CheckBridegroom(nid).Data);
        }
    }
}
