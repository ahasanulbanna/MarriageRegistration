namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration4_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MarriageRegistrarModel", "KaziId", c => c.Int(nullable: false));
            CreateIndex("dbo.MarriageRegistrarModel", "KaziId");
            AddForeignKey("dbo.MarriageRegistrarModel", "KaziId", "dbo.Kazi", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MarriageRegistrarModel", "KaziId", "dbo.Kazi");
            DropIndex("dbo.MarriageRegistrarModel", new[] { "KaziId" });
            DropColumn("dbo.MarriageRegistrarModel", "KaziId");
        }
    }
}
