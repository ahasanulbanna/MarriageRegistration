namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_From_Nabil_Pc2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Quazi", "AdminId", c => c.Int(nullable: false));
            CreateIndex("dbo.Quazi", "AdminId");
            AddForeignKey("dbo.Quazi", "AdminId", "dbo.Admin", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Quazi", "AdminId", "dbo.Admin");
            DropIndex("dbo.Quazi", new[] { "AdminId" });
            DropColumn("dbo.Quazi", "AdminId");
        }
    }
}
