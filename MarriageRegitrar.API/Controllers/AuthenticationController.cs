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
            var isAdmin = context.Admins.Where(x => (x.Name == login.Username || x.Email == login.Username) && x.Password == login.Password)
                .Select(x=>new { x.Id,x.Name})
                .FirstOrDefault();
            var isQuazi = context.Quazies.Where(x => (x.Name == login.Username || x.NidNo == login.Username || x.MobileNo == login.Username) && x.Password == login.Password)
                .Select(x =>new { x.Name,x.Id})
                .FirstOrDefault();
            if (isAdmin !=null)
            {
                return Ok(isAdmin);
            }
            else if (isQuazi!=null)
            {
                return Ok(isQuazi);
            }
            else
            {
                return BadRequest();
            }
          
        }
    }
}
