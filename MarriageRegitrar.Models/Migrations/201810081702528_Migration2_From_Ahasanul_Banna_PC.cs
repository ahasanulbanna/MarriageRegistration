using System.Data.Entity.Migrations;

namespace MarriageRegitrar.Models.Migrations
{
    public partial class Migration2_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Kazi",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        FName = c.String(),
                        MName = c.String(),
                        Address = c.String(),
                        AdminId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Admin", t => t.AdminId)
                .Index(t => t.AdminId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Kazi", "AdminId", "dbo.Admin");
            DropIndex("dbo.Kazi", new[] { "AdminId" });
            DropTable("dbo.Kazi");
        }
    }
}
