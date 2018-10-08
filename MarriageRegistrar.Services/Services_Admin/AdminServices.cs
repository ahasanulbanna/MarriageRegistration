using System;
using System.Web.Mvc;
using MarriageRegistrar.Common;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models_Admin;

namespace MarriageRegistrar.Services.Services_Admin
{
    public class AdminServices:IAdminServices
    {
        private readonly MarriageRegistrarDbContext _context;

        public AdminServices()
        {
            _context=new MarriageRegistrarDbContext();
        }

        public JsonResult CreateAdmin(Admin admin)
        {
            try
            {
                admin.Kazis = null;
                admin.LastSeen = null;
                _context.Admins.Add(admin);
                _context.SaveChanges();
                Generator.IsReport = "Ok";
                Generator.Message = "Admin Created Successfully";
            }
            catch (Exception ex)
            {
                Generator.IsReport = "NotOk";
                Generator.Message = ex.Message;
            }
            return new JsonResult
            {
                Data = new
                {
                    Generator.IsReport,
                    Generator.Message
                },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
    }

    public interface IAdminServices
    {
        JsonResult CreateAdmin(Admin admin);
    }
}
