using System.Web.Http;
using MarriageRegistrar.Services.Services_Kazi;
using MarriageRegitrar.Models.Models_Kazi;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("API/Kazi")]
    public class KaziController : ApiController
    {
        private readonly IKaziServices _services;

        public KaziController()
        {
                _services=new KaziServices();
        }

        [Route("CreateKazi")]
        [HttpPost]
        public IHttpActionResult CreateKazi(Kazi kazi )
        {
            return Ok(_services.CreateKazi(kazi).Data);
        }

        [Route("GetKaziById")]
        [HttpGet]
        public IHttpActionResult GetKaziById(int id)
        {
            return Ok(_services.GetKaziById(id));
        }
    }
}
