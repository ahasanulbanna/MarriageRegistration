using MarriageRegistrar.Common;
using MarriageRegitrar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MarriageRegistrar.Services.Investigation_Services
{
    public class InvestigationServices : IInvestigationServices
    {
        private readonly MarriageRegistrarDbContext context;
        public InvestigationServices()
        {
            context = new MarriageRegistrarDbContext();
        }
        public JsonResult CheckBride(string Nid)
        {
            var NidCheckingResult = context.Nids.Where(x => x.NidNo == Nid).Select(x => x).FirstOrDefault();
            var BrideMarriageResult = from M in context.Marriages
                                      join C in context.Couples
                                      on M.CoupleId equals C.Id
                                      where C.BrNidNo == Nid
                                      select M;
            if (NidCheckingResult != null)
            {
                return new JsonResult
                {
                    Data =new { BrideMarriageResult, NidCheckingResult },
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
            else
            {
                Generator.IsReport = "NotOk";
                Generator.Message = "Not Adult";

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

        public JsonResult CheckBridegroom(string Nid)
        {
            var NidCheckingResult = context.Nids.Where(x => x.NidNo == Nid).Select(x => x).FirstOrDefault();
            var BridegroomMarriageResult = from M in context.Marriages
                                      join C in context.Couples
                                      on M.CoupleId equals C.Id
                                      where C.BgNidNo == Nid
                                      select M;
            if (NidCheckingResult != null && BridegroomMarriageResult != null)
            {
                return new JsonResult
                {
                    Data = new { BridegroomMarriageResult, NidCheckingResult },
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
            else
            {
                Generator.IsReport = "NotOk";
                Generator.Message = "Not Adult";

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
    public interface IInvestigationServices
    {
        JsonResult CheckBride(string Nid);
        JsonResult CheckBridegroom(string Nid);
    }
}
