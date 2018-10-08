using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using MarriageRegistrar.Common;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models_Kazi;

namespace MarriageRegistrar.Services.Services_Kazi
{
    public class KaziServices : IKaziServices
    {
        private readonly MarriageRegistrarDbContext _context;

        public KaziServices()
        {
                _context=new MarriageRegistrarDbContext();
        }
        public JsonResult CreateKazi(Kazi kazi)
        {
            try
            {
                kazi.Admin = null;
                _context.Kazis.Add(kazi);
                _context.SaveChanges();
                Generator.IsReport = "Ok";
                Generator.Message = "Kazi Create Successfully";
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

        public JsonResult GetKaziById(int id)
        {
            return new JsonResult
            {
                Data = _context.Kazis.Find(id),
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };

        }
    }

    public interface IKaziServices
    {
        JsonResult CreateKazi(Kazi kazi);
        JsonResult GetKaziById(int id);
    }
}
