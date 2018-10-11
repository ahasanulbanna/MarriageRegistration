using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using MarriageRegistrar.Common;
using MarriageRegistrar.Services.Dtoes;
using MarriageRegitrar.Models;
using MarriageRegitrar.Models.Models_Bride;
using MarriageRegitrar.Models.Models_BrideGroom;
using MarriageRegitrar.Models.Models_Brides;
using MarriageRegitrar.Models.Models_Shared;

namespace MarriageRegistrar.Services.Services_Shared
{
    public class MarriageRegistrarServices : IMarriageRegistrarServices
    {
        private readonly MarriageRegistrarDbContext _context;

        public MarriageRegistrarServices()
        {
            _context=new MarriageRegistrarDbContext();
        }
        public JsonResult CreateMarriageRegistrar(MarriageRegistrarModel marriageRegistrarModel)
        {
            try
            {
                marriageRegistrarModel.Kazi = null;
                _context.MarriageRegistrars.Add(marriageRegistrarModel);
                _context.SaveChanges();
                Generator.IsReport = "Ok";
                Generator.Message = "Congratulate the newlyweds Mr." +
                                    marriageRegistrarModel.Bridegroom.BridegroomName + " && Mrs." +
                                    marriageRegistrarModel.Bride.BrideName;

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
                }
            };
        }

        public JsonResult ProcessMarriageRegistrar(MarriageRegistrarDto marriageRegistrarDto)
        {
            try
            {
                #region Check Bride Married Number
                var brideMarriateNumber = _context.Brides.Where(b => b.BrideNid == marriageRegistrarDto.BrideNid)
                    .Select(x => x.BrideNumberOfMarriage).FirstOrDefault();
                #endregion

                #region Check Bridegroom Married Number
                var bridegroomMarriateNumber = _context.Bridegrooms.Where(b => b.BridegroomNid == marriageRegistrarDto.BridegroomNid)
                    .Select(x => x.BridegroomNumberOfMarriage).FirstOrDefault();
                #endregion

                if (brideMarriateNumber < 4 && bridegroomMarriateNumber < 4)
                {
                    bridegroomMarriateNumber++;
                    brideMarriateNumber++;

                    #region Process unique Marriage Registration Number
                    var ff = Guid.NewGuid().ToString();
                    var now = DateTime.Now;
                    var year = now.Year;
                    var month = now.Month.ToString("00");
                    var date = now.Day.ToString("00");
                    var fomat = year + month + date;
                    var maxId = 0;
                    if (_context.MarriageRegistrars.Any(m => m.RegistrationNo.StartsWith(fomat)))
                    {
                        maxId = _context.MarriageRegistrars
                                    .Where(m => m.RegistrationNo.StartsWith(fomat))
                                    .Select(m => m.RegistrationNo.Substring(fomat.Length)).AsEnumerable()
                                    .Select(int.Parse)
                                    .Max()
                                + 1;
                    }
                    var id = fomat + (maxId.ToString().PadLeft(5, '0'));
                    #endregion

                    #region Process Bride Wittness Model

                    var brWitness = new BrWitness();
                    brWitness.BrWitnessName = marriageRegistrarDto.BrWitnessName;
                    brWitness.BrWitnessNid = marriageRegistrarDto.BrWitnessNid;
                    brWitness.BrWitnessAddress = marriageRegistrarDto.BrWitnessAddress;
                    brWitness.BrWitnessPhoneNo = marriageRegistrarDto.BrWitnessPhoneNo;
                    _context.BrWitnesses.Add(brWitness);
                    _context.SaveChanges();
                    var brWitnessId = brWitness.Id;   //Get inserted row primary key value
                    #endregion

                    #region Process Bridegroom Wittness Model

                    var bgWitness = new BgWitness();

                    bgWitness.BgWitnessName = marriageRegistrarDto.BgWitnessName;
                    bgWitness.BgWitnessNid = marriageRegistrarDto.BrWitnessNid;
                    bgWitness.BgWitnessAddress = marriageRegistrarDto.BgWitnessAddress;
                    bgWitness.BgWitnessPhoneNo = marriageRegistrarDto.BgWitnessPhoneNo;
                    _context.BgWitnesses.Add(bgWitness);
                    _context.SaveChanges();
                    var bgWitnessId = bgWitness.Id;   //Get inserted row primary key value
                    #endregion

                    #region Process Bride Model

                    var bride = new Bride();

                    bride.BrideName = marriageRegistrarDto.BrideName;
                    bride.BrideFName = marriageRegistrarDto.BrideFName;
                    bride.BrideMName = marriageRegistrarDto.BrideMName;
                    bride.BrideDoB = marriageRegistrarDto.BrideDoB;
                    bride.BrideNumberOfMarriage = brideMarriateNumber;
                    bride.BrideNid = marriageRegistrarDto.BrideNid;
                    bride.BrideAddress = marriageRegistrarDto.BrideAddress;
                    bride.BrWitnessId = brWitnessId;  //Foreign Key value come from BrWitness table primary key
                    _context.Brides.Add(bride);
                    _context.SaveChanges();
                    var brideId = bride.Id;   //Get inserted row primary key value

                    #endregion

                    #region Process Bridegroom Model

                    var bridegroom = new Bridegroom();
                    
                    bridegroom.BridegroomName = marriageRegistrarDto.BridegroomName;
                    bridegroom.BridegroomFName = marriageRegistrarDto.BridegroomFName;
                    bridegroom.BridegroomNid = marriageRegistrarDto.BridegroomNid;
                    bridegroom.BridegroomNumberOfMarriage = bridegroomMarriateNumber;
                    bridegroom.BridegroomAddress = marriageRegistrarDto.BridegroomAddress;
                    bridegroom.BridegroomDoB = marriageRegistrarDto.BridegroomDoB;
                    bridegroom.BridegroomMName = marriageRegistrarDto.BridegroomMName;
                    bridegroom.BgWitnessId = bgWitnessId;
                    _context.Bridegrooms.Add(bridegroom);
                    _context.SaveChanges();
                    var bridegroomId = bridegroom.Id;   //Get inserted row primary key value

                    #endregion

                    #region Process MorriageRegistrarModel
                    var marriageRegistrarModel = new MarriageRegistrarModel();
                   
                    marriageRegistrarModel.BrideId = brideId;
                    marriageRegistrarModel.BridegroomId = bridegroomId;
                    marriageRegistrarModel.CurrentStatus = true;
                    marriageRegistrarModel.KaziId = marriageRegistrarDto.KaziId;
                    marriageRegistrarModel.MarriageDate = DateTime.Now;
                    marriageRegistrarModel.RegistrationNo = id;
                    marriageRegistrarModel.Photo = marriageRegistrarDto.Photo;
                    _context.MarriageRegistrars.Add(marriageRegistrarModel);
                    _context.SaveChanges();
                    #endregion
                    Generator.IsReport = "Ok";
                    Generator.Message = "Congratulate the newlyweds Mr." +
                                        marriageRegistrarDto.BridegroomName + " && Mrs." +
                                        marriageRegistrarDto.BrideName;

                }
                else
                {
                    Generator.IsReport = "NotOk";
                    Generator.Message = "They are not married";
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
                }
            };


        }
    }

    public interface IMarriageRegistrarServices
    {
        JsonResult CreateMarriageRegistrar(MarriageRegistrarModel marriageRegistrarModel);
        JsonResult ProcessMarriageRegistrar(MarriageRegistrarDto marriageRegistrarDto);
    }
}
