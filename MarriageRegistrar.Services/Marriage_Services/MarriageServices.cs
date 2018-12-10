using MarriageRegistrar.Common;
using MarriageRegistrar.Services.Dtoes;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MarriageRegistrar.Services.Marriage_Services
{
    
    public class MarriageServices : IMarriageServices
    {
        private readonly MarriageRegistrarDbContext context;
        public MarriageServices()
        {
            context = new MarriageRegistrarDbContext();
        }
        public JsonResult RegistrarMarriage(MarriageDto marriageDto)
        {
            try
            {
                var now = DateTime.Now;
                var year = now.Year;
                var month = now.Month.ToString("00");
                var date = now.Day.ToString("00");
                var fomat = year + month + date;
                var maxId = 0;
                if (context.Marriages.Any(m => m.MarriageRegistrationNo.StartsWith(fomat)))
                {
                    maxId = context.Marriages
                                .Where(m => m.MarriageRegistrationNo.StartsWith(fomat))
                                .Select(m => m.MarriageRegistrationNo.Substring(fomat.Length)).AsEnumerable()
                                .Select(int.Parse)
                                .Max()
                            + 1;
                }
                var MarriageRegistrationNo = fomat + (maxId.ToString().PadLeft(5, '0'));
                var BrideMarriageCount = context.Couples.Where(x => x.BrNidNo == marriageDto.BrNidNo).Count();
                var BridegroomMarriageCount = context.Couples.Where(x => x.BgNidNo == marriageDto.BgNidNo).Count();
              

                var couple = new Couple();
                couple.BrName = marriageDto.BrName;
                couple.BrFName = marriageDto.BrFName;
                couple.BrMName = marriageDto.BrMName;
                couple.BrDoB = marriageDto.BrDoB;
                couple.BrAddress = marriageDto.BrAddress;
                couple.BrMobileNo = marriageDto.BrMobileNo;
                couple.BrNidNo = marriageDto.BrNidNo;
                couple.BgName = marriageDto.BgName;
                couple.BgFName = marriageDto.BgFName;
                couple.BgMName = marriageDto.BgMName;
                couple.BgDoB = marriageDto.BgDoB;
                couple.BgAddress = marriageDto.BgAddress;
                couple.BgNidNo = marriageDto.BgNidNo;
                couple.BgMarriageCount = BridegroomMarriageCount++;
                couple.BrMarriageCount = BrideMarriageCount++;
                context.Couples.Add(couple);
                context.SaveChanges();
                var CoupleId = couple.Id;

                var moulovi = new Moulovi();
                moulovi.MouloviName = marriageDto.MouloviName;
                moulovi.MobileNo = marriageDto.MouloviMobileNo;
                moulovi.Address = marriageDto.MouloviAddress;
                moulovi.NidNo = marriageDto.MouloviNidNo;
                context.Moulovies.Add(moulovi);
                context.SaveChanges();
                var MouloviId = moulovi.Id;

                var attorney = new Attorney();
                attorney.BrAttorneyName = marriageDto.BrAttorneyName;
                attorney.BrAttorneyAddress = marriageDto.BrAttorneyAddress;
                attorney.BgAttorneyName = marriageDto.BgAttorneyName;
                attorney.BgAttorneyAddress = marriageDto.BgAttorneyAddress;
                context.Attornies.Add(attorney);
                context.SaveChanges();
                var AttorneyId = attorney.Id;

                var marriage = new Marriage();
                marriage.CoupleId = CoupleId;
                marriage.MouloviId = MouloviId;
                marriage.AtorneyId = AttorneyId;
                marriage.MarriageRegistrationNo = MarriageRegistrationNo;
                marriage.MarriageDate = DateTime.Now;
                marriage.MarriageRegistrationFee = marriageDto.MarriageRegistrationFee;
                context.Marriages.Add(marriage);
                context.SaveChanges();
                Generator.IsReport = "IsOk";
                Generator.Message = "Congratulate the newlyweds Mr." + marriageDto.BgName + " && Mrs." + marriageDto.BrName + ". Yours Marriage Registrar Number: " + MarriageRegistrationNo;
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
    public interface IMarriageServices
    {
        JsonResult RegistrarMarriage(MarriageDto marriageDto);
    }
}
