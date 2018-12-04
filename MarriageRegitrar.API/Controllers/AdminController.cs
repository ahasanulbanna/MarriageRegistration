using System.Web.Http;
using MarriageRegistrar.Services.Admin_Services;
using MarriageRegitrar.Models.Models;
namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("API/Admin")]
    public class AdminController : ApiController
    {
        private readonly IAdminServices _services;

        //constructor
            public AdminController()
        {
            _services=new AdminServices();
        }

        [Route("CreateAdmins")]
        [HttpPost]
        public IHttpActionResult CreateAdmin(Admin admin)
        {
           return Ok(_services.AddNewAdmin(admin).Data);
        }

        [Route("GetAllAdminList")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok();
        }

        [Route("GetAdminByAdminId/{id:int}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok();
        }
    }
}
