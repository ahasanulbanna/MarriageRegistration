namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration5_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.NID",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Type = c.String(),
                        MName = c.String(),
                        DoB = c.DateTime(nullable: false),
                        Address = c.String(),
                        Photo = c.String(),
                        MaritalStatus = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.NID");
        }
    }
}
