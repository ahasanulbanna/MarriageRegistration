using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MarriageRegitrar.Models.Common;
using MarriageRegitrar.Models.Models_Kazi;

namespace MarriageRegitrar.Models.Models_Admin
{
    public class Admin : Entity<int>
    {
        public string Name { get; set; }
        [StringLength(450)]
        [Index(IsUnique = true), Required]
        public string Username { get; set; }
        [StringLength(450)]
        [Index(IsUnique = true), Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public DateTime? LastSeen { get; set; }
        public ICollection<Kazi> Kazis { get; set; }
      
    }
}
