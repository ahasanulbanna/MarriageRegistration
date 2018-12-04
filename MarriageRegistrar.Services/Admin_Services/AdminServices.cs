using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MarriageRegistrar.Services.Admin_Services
{
    
    public class AdminServices: IAdminServices
    {
        private readonly MarriageRegistrarDbContext context;
        public AdminServices()
        {
            context = new MarriageRegistrarDbContext();
        }

        public JsonResult AddNewAdmin(Admin admin)
        {
            throw new NotImplementedException();
        }

        public JsonResult GetAdminByAdminId(int Id)
        {
            throw new NotImplementedException();
        }

        public JsonResult UpdateAdminByAdminId(int Id)
        {
            throw new NotImplementedException();
        }
    }
    public interface IAdminServices
    {
        JsonResult AddNewAdmin(Admin admin);
        JsonResult UpdateAdminByAdminId(int Id);
        JsonResult GetAdminByAdminId(int Id);

    }
}
