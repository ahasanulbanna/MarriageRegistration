using System;

namespace MarriageRegistrar.Services.Dtoes
{
    public class MarriageDto
    {
        public string BrName { get; set; }     //Br=Brid  
        public string BrFName { get; set; }
        public string BrMName { get; set; }
        public string BrAddress { get; set; }
        public string BrNidNo { get; set; }
        public string BrMobileNo { get; set; }
        public DateTime BrDoB { get; set; }
        public string BgName { get; set; }   //Bg=Bridegroom
        public string BgFName { get; set; }
        public string BgMName { get; set; }
        public string BgAddress { get; set; }
        public string BgNidNo { get; set; }
        public string BgMobileNo { get; set; }
        public DateTime BgDoB { get; set; }

        public string MouloviName { get; set; }
        public string MouloviNidNo { get; set; }
        public string MouloviMobileNo { get; set; }
        public string MouloviAddress { get; set; }

        public string BrAttorneyName { get; set; }
        public string BrAttorneyNidNo { get; set; }
        public string BrAttorneyMobileNo { get; set; }
        public string BrAttorneyAddress { get; set; }
        public string BgAttorneyName { get; set; }
        public string BgAttorneyNidNo { get; set; }
        public string BgAttorneyMobileNo { get; set; }
        public string BgAttorneyAddress { get; set; }

     
        public int QuaziId { get; set; }
        public double MarriageRegistrationFee { get; set; }
        public double DowerAmount { get; set; }






    }
}