using MarriageRegistrar.Common;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MarriageRegistrar.Services.Quazi_Services
{
    public class QuaziServices : IQuaziServices
    {
        private readonly MarriageRegistrarDbContext context;
        public QuaziServices()
        {
            context = new MarriageRegistrarDbContext();
        }
        public JsonResult AddNewQuazi(Quazi quazi)
        {

            var quaziInvestigation =context.Quazies.Where(x => x.NidNo == quazi.NidNo)
                .Select(x=>x)
                .FirstOrDefault();
            if (quaziInvestigation!=null)
            {
                return new JsonResult
                {
                    Data = quaziInvestigation,
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
            else if (quazi!=null)
            {
                
                var now = DateTime.Now;
                var year = Convert.ToString(now.Year);
                var month = now.Month.ToString("00");
                var date = now.Day.ToString("00");
                var fomat = year + month + date;
                var maxId = 0;
                if (context.Quazies.Any(m => m.RegistrationNo.StartsWith(fomat)) && context.Quazies.Count() != 0)
                {
                    maxId = context.Quazies
                                .Where(m => m.RegistrationNo.StartsWith(fomat))
                                .Select(m => m.RegistrationNo.Substring(fomat.Length)).AsEnumerable()
                                .Select(int.Parse)
                                .Max()
                            + 1;
                }
                var RegistrationNo = fomat + (maxId.ToString().PadLeft(5, '0'));
                quazi.RegistrationNo = RegistrationNo;
                context.Quazies.Add(quazi);
                context.SaveChanges();
                Generator.IsReport = "IsOk";
                Generator.Message = "Add new quazi";
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
        public JsonResult GetQuaziByQuaziId(int Id)
        {
            return new JsonResult
            {
                Data = context.Quazies.Where(x=>x.Id==Id).Select(x=>x).FirstOrDefault(),
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
        public JsonResult UpdateQuaziByQuaziId(Quazi quazi)
        {
            int noOfRowUpdated = context.Database.ExecuteSqlCommand($"UPDATE Quazi SET Name='{quazi.Name}', [] = '{quazi.Address}");
            context.SaveChanges();
            Generator.IsReport = "Ok";
            Generator.Message = "Quazi updated successfully";

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
    public interface IQuaziServices
    {
        JsonResult AddNewQuazi(Quazi quazi);
        JsonResult UpdateQuaziByQuaziId(Quazi quazi);
        JsonResult GetQuaziByQuaziId(int Id);
    }
}
