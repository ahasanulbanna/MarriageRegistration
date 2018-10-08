using System.Data.Entity.Migrations;

namespace MarriageRegitrar.Models.Migrations
{
    public partial class Migration_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BgWitness",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        NidNumber = c.String(),
                        Address = c.String(),
                        Number = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Bridegroom",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        FName = c.String(),
                        MName = c.String(),
                        Address = c.String(),
                        DoB = c.DateTime(nullable: false),
                        NumberOfMarriage = c.Int(nullable: false),
                        BgWitnessId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BgWitness", t => t.BgWitnessId)
                .Index(t => t.BgWitnessId);
            
            CreateTable(
                "dbo.Bride",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        FName = c.String(),
                        MName = c.String(),
                        Address = c.String(),
                        DoB = c.DateTime(nullable: false),
                        NumberOfMarriage = c.Int(nullable: false),
                        BrWitnessId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BrWitness", t => t.BrWitnessId)
                .Index(t => t.BrWitnessId);
            
            CreateTable(
                "dbo.BrWitness",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        NidNumber = c.String(),
                        Address = c.String(),
                        Number = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.MarriageRegistrarModel",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrideId = c.Int(nullable: false),
                        BridegroomId = c.Int(nullable: false),
                        RegistrationNo = c.String(),
                        Photo = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Bride", t => t.BrideId)
                .ForeignKey("dbo.Bridegroom", t => t.BridegroomId)
                .Index(t => t.BrideId)
                .Index(t => t.BridegroomId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MarriageRegistrarModel", "BridegroomId", "dbo.Bridegroom");
            DropForeignKey("dbo.MarriageRegistrarModel", "BrideId", "dbo.Bride");
            DropForeignKey("dbo.Bride", "BrWitnessId", "dbo.BrWitness");
            DropForeignKey("dbo.Bridegroom", "BgWitnessId", "dbo.BgWitness");
            DropIndex("dbo.MarriageRegistrarModel", new[] { "BridegroomId" });
            DropIndex("dbo.MarriageRegistrarModel", new[] { "BrideId" });
            DropIndex("dbo.Bride", new[] { "BrWitnessId" });
            DropIndex("dbo.Bridegroom", new[] { "BgWitnessId" });
            DropTable("dbo.MarriageRegistrarModel");
            DropTable("dbo.BrWitness");
            DropTable("dbo.Bride");
            DropTable("dbo.Bridegroom");
            DropTable("dbo.BgWitness");
        }
    }
}
