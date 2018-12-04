using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Divorce:Entity<int>
    {
        public int MarriageId { get; set; }
        public Marriage Marriage { get; set; }
        public int CoupleId { get; set; }
        public Couple Couple { get; set; }
        public int QuaziId { get; set; }
        public Quazi Quazi { get; set; }
        public int DivorceWitnessId { get; set; }
        public DivorceWitness DivorceWitness { get; set; }
        public DateTime DivorceDate { get; set; }

    }
}
