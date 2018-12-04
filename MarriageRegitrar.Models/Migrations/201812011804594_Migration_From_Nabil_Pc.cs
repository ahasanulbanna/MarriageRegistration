namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_From_Nabil_Pc : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admin",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        NidNo = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Attorney",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrName = c.String(),
                        BrNidNo = c.String(),
                        BrMobileNo = c.String(),
                        BrAddress = c.String(),
                        BgName = c.String(),
                        BgNidNo = c.String(),
                        BgMobileNo = c.String(),
                        BgAddress = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Couple",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrName = c.String(),
                        BrFName = c.String(),
                        BrMName = c.String(),
                        BrAddress = c.String(),
                        BrNidNo = c.String(),
                        BrMobileNo = c.String(),
                        BrDoB = c.DateTime(nullable: false),
                        BrMarriageCount = c.Int(nullable: false),
                        BgName = c.String(),
                        BgFName = c.String(),
                        BgMName = c.String(),
                        BgAddress = c.String(),
                        BgNidNo = c.String(),
                        BgMobileNo = c.String(),
                        BgDoB = c.DateTime(nullable: false),
                        BgMarriageCount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Divorce",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        MarriageId = c.Int(nullable: false),
                        CoupleId = c.Int(nullable: false),
                        QuaziId = c.Int(nullable: false),
                        DivorceWitnessId = c.Int(nullable: false),
                        DivorceDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Couple", t => t.CoupleId)
                .ForeignKey("dbo.DivorceWitness", t => t.DivorceWitnessId)
                .ForeignKey("dbo.Marriage", t => t.MarriageId)
                .ForeignKey("dbo.Quazi", t => t.QuaziId)
                .Index(t => t.MarriageId)
                .Index(t => t.CoupleId)
                .Index(t => t.QuaziId)
                .Index(t => t.DivorceWitnessId);
            
            CreateTable(
                "dbo.DivorceWitness",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrDWitnessName = c.String(),
                        BrDWitnessNid = c.String(),
                        BrDWitnessAddress = c.String(),
                        BrDWitnessMobileNo = c.String(),
                        BgDWitnessName = c.String(),
                        BgDWitnessNid = c.String(),
                        BgDWitnessAddress = c.String(),
                        BgDWitnessMobileNo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Marriage",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CoupleId = c.Int(nullable: false),
                        QuaziId = c.Int(nullable: false),
                        MarriageWitnessId = c.Int(nullable: false),
                        AtorneyId = c.Int(nullable: false),
                        MouloviId = c.Int(nullable: false),
                        MarriageDate = c.DateTime(nullable: false),
                        MarriageRegistrationNo = c.String(),
                        MarriageRegistrationFee = c.Double(nullable: false),
                        Attorney_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Attorney", t => t.Attorney_Id)
                .ForeignKey("dbo.Couple", t => t.CoupleId)
                .ForeignKey("dbo.MarriageWitness", t => t.MarriageWitnessId)
                .ForeignKey("dbo.Moulovi", t => t.MouloviId)
                .ForeignKey("dbo.Quazi", t => t.QuaziId)
                .Index(t => t.CoupleId)
                .Index(t => t.QuaziId)
                .Index(t => t.MarriageWitnessId)
                .Index(t => t.MouloviId)
                .Index(t => t.Attorney_Id);
            
            CreateTable(
                "dbo.MarriageWitness",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrWitnessName = c.String(),
                        BrWitnessNid = c.String(),
                        BrWitnessAddress = c.String(),
                        BrWitnessMobileNo = c.String(),
                        BgWitnessName = c.String(),
                        BgWitnessNid = c.String(),
                        BgWitnessAddress = c.String(),
                        BgWitnessMobileNo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Moulovi",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        MouloviName = c.String(),
                        NidNo = c.String(),
                        MobileNo = c.String(),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Quazi",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        NidNo = c.String(),
                        RegistrationNo = c.String(),
                        MobileNo = c.String(),
                        Address = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
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
            DropForeignKey("dbo.Divorce", "QuaziId", "dbo.Quazi");
            DropForeignKey("dbo.Divorce", "MarriageId", "dbo.Marriage");
            DropForeignKey("dbo.Marriage", "QuaziId", "dbo.Quazi");
            DropForeignKey("dbo.Marriage", "MouloviId", "dbo.Moulovi");
            DropForeignKey("dbo.Marriage", "MarriageWitnessId", "dbo.MarriageWitness");
            DropForeignKey("dbo.Marriage", "CoupleId", "dbo.Couple");
            DropForeignKey("dbo.Marriage", "Attorney_Id", "dbo.Attorney");
            DropForeignKey("dbo.Divorce", "DivorceWitnessId", "dbo.DivorceWitness");
            DropForeignKey("dbo.Divorce", "CoupleId", "dbo.Couple");
            DropIndex("dbo.Marriage", new[] { "Attorney_Id" });
            DropIndex("dbo.Marriage", new[] { "MouloviId" });
            DropIndex("dbo.Marriage", new[] { "MarriageWitnessId" });
            DropIndex("dbo.Marriage", new[] { "QuaziId" });
            DropIndex("dbo.Marriage", new[] { "CoupleId" });
            DropIndex("dbo.Divorce", new[] { "DivorceWitnessId" });
            DropIndex("dbo.Divorce", new[] { "QuaziId" });
            DropIndex("dbo.Divorce", new[] { "CoupleId" });
            DropIndex("dbo.Divorce", new[] { "MarriageId" });
            DropTable("dbo.NID");
            DropTable("dbo.Quazi");
            DropTable("dbo.Moulovi");
            DropTable("dbo.MarriageWitness");
            DropTable("dbo.Marriage");
            DropTable("dbo.DivorceWitness");
            DropTable("dbo.Divorce");
            DropTable("dbo.Couple");
            DropTable("dbo.Attorney");
            DropTable("dbo.Admin");
        }
    }
}
