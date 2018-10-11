using System;

namespace MarriageRegistrar.Services.Dtoes
{
    public class MarriageRegistrarDto
    {
        #region Bridegroom Model Data
        public string BridegroomName { get; set; }
        public string BridegroomNid { get; set; }
        public string BridegroomFName { get; set; }
        public string BridegroomMName { get; set; }
        public string BridegroomAddress { get; set; }
        public DateTime BridegroomDoB { get; set; }
        #endregion

        #region Bridegroom Witness Data Model
        public string BgWitnessName { get; set; }
        public string BgWitnessNumber { get; set; }
        public string BgWitnessAddress { get; set; }
        public string BgWitnessPhoneNo { get; set; }
        #endregion

        #region Bride Model Data
        public string BrideName { get; set; }
        public string BrideNid { get; set; }
        public string BrideFName { get; set; }
        public string BrideMName { get; set; }
        public string BrideAddress { get; set; }
        public DateTime BrideDoB { get; set; }
        #endregion

        #region Bride Witness Data Model
        public string BrWitnessName { get; set; }
        public string BrWitnessNid { get; set; }
        public string BrWitnessAddress { get; set; }
        public string BrWitnessPhoneNo { get; set; }
        #endregion

        #region MarriageRegistrarModel Data 
        public int KaziId { get; set; }
        public string Photo { get; set; }
        #endregion


    }
}