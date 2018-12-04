using MarriageRegitrar.API.Models;
using MarriageRegitrar.Models;
using System.Linq;
using System.Web.Http;

namespace MarriageRegitrar.API.Controllers
{
    [RoutePrefix("Api/Authentication")]
    public class AuthenticationController : ApiController
    {
        private readonly MarriageRegistrarDbContext context;
        public AuthenticationController()
        {
            context = new MarriageRegistrarDbContext(); 
        }

        [Route("Login")]
        [HttpPost]
        public IHttpActionResult Login(Login login)
        {
            var isQuazi = context.Admins.Any(x => (x.Name == login.Username || x.Email == login.Username) && x.Password == login.Password);
            return Ok(isQuazi);
        }
    }
}
