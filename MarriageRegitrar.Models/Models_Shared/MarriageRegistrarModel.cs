﻿using System.ComponentModel.DataAnnotations.Schema;
using MarriageRegitrar.Models.Common;
using MarriageRegitrar.Models.Models_Bride;
using MarriageRegitrar.Models.Models_BrideGroom;
using MarriageRegitrar.Models.Models_Brides;

namespace MarriageRegitrar.Models.Models_Shared
{
    public class MarriageRegistrarModel: Entity<int>
    {
        [ForeignKey("BrideId")]
        public Bride Bride { get; set; }
        public int BrideId { get; set; }
        [ForeignKey("BridegroomId")]
        public Bridegroom Bridegroom { get; set; }
        public int BridegroomId { get; set; }
        public string RegistrationNo { get; set; }
        public string Photo { get; set; }

    }
}