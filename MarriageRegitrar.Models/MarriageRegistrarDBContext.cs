using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MarriageRegitrar.Models.Models_Admin;
using MarriageRegitrar.Models.Models_Bride;
using MarriageRegitrar.Models.Models_BrideGroom;
using MarriageRegitrar.Models.Models_Brides;
using MarriageRegitrar.Models.Models_Kazi;
using MarriageRegitrar.Models.Models_Shared;

namespace MarriageRegitrar.Models
{
    public class MarriageRegistrarDbContext:DbContext
    {
        public MarriageRegistrarDbContext() : base("Con")
        {
           Database.SetInitializer(new MigrateDatabaseToLatestVersion<MarriageRegistrarDbContext, MarriageRegitrar.Models.Migrations.Configuration>("Con"));
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

        }

        #region Admin DbSet
        public DbSet<Admin> Admins { get; set; }
        #endregion


        #region Bride DbSet
        public DbSet<Bride> Brides { get; set; }
        public DbSet<BrWitness> BrWitnesses { get; set; }
        #endregion

        #region Bridegroom DbSet
        public DbSet<Bridegroom> Bridegrooms { get; set; }
        public DbSet<BgWitness> BgWitnesses { get; set; }
        #endregion

        #region Shared DbSet
        public DbSet<MarriageRegistrarModel> MarriageRegistrars { get; set; }
        #endregion

        #region Shared DbSet
        public DbSet<Kazi> Kazis { get; set; }
        #endregion
    }
}
