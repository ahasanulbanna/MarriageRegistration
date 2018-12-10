using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Marriage:Entity<int>
    {
        public int CoupleId { get; set; }
        public Couple Couple { get; set; }
        public int QuaziId { get; set; }
        public Quazi Quazi { get; set; }
        public int MarriageWitnessId { get; set; }
        public MarriageWitness MarriageWitness { get; set; }
        public int AtorneyId { get; set; }
        public Attorney Attorney { get; set; }
        public int MouloviId { get; set; }
        public Moulovi Moulovi { get; set; }
        public DateTime MarriageDate { get; set; }
        public string MarriageRegistrationNo { get; set; }
        public double DowerAmount { get; set; }
        public double MarriageRegistrationFee { get; set; }
    }
}
