using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using MarriageRegistrar.Common;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models_NID;

namespace MarriageRegistrar.Services.Services_NID
{
    
    public class NidServices : INidServices
    {
        private readonly MarriageRegistrarDbContext _context;

        public NidServices()
        {
            _context=new MarriageRegistrarDbContext();
        }
        public JsonResult CreateNid(NID nid)
        {
            try
            {
                var today = DateTime.Today;
                var a = (today.Year * 100 + today.Month) * 100 + today.Day;
                var b = (nid.DoB.Year * 100 + nid.DoB.Month) * 100 + nid.DoB.Day;
                var age = (a - b) / 10000;
                if (age >= 18)
                {
                    _context.Nids.Add(nid);
                    _context.SaveChanges();
                    Generator.IsReport = "Ok";
                    Generator.Message = "Data Successfully Add on NID";
                }
                else
                {
                    Generator.IsReport = "NotOk";
                    Generator.Message = "Data Not Add on NID";
                }
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


    public interface INidServices
    {
        JsonResult CreateNid(NID nid);
    }
}
