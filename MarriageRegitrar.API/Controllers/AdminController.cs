using System.Web.Http;
using MarriageRegistrar.Services.Services_Admin;
using MarriageRegitrar.Models.Models_Admin;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("API/Admin")]
    public class AdminController : ApiController
    {
        private readonly IAdminServices _services;
            public AdminController()
        {
            _services=new AdminServices();
        }

        [Route("CreateAdmins")]
        [HttpPost]
        public IHttpActionResult CreateAdmin(Admin admin)
        {
           return Ok(_services.CreateAdmin(admin).Data);
        }
    }
}
