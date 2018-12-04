using System.Web.Http;
using MarriageRegistrar.Services.Quazi_Services;
using MarriageRegitrar.Models.Models;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/Quazi")]
    public class QuaziController : ApiController
    {
        private readonly IQuaziServices _services;

        public QuaziController()
        {
                _services=new QuaziServices();
        }

        [Route("AddNewQuazi")]
        [HttpPost]
        public IHttpActionResult AddNewQuazi(Quazi quazi )
        {
            return Ok(_services.AddNewQuazi(quazi).Data);
        }

        [Route("GetQuaziByQuaziId")]
        [HttpGet]
        public IHttpActionResult GetQuaziByQuaziId(int id)
        {
            return Ok(_services.GetQuaziByQuaziId(id));
        }
    }
}
