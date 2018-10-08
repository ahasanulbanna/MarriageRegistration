using System.Web;
namespace MarriageRegistrar.Common
{
    public class Generator
    {
        public static bool IsOk { get; set; }
        public static string IsReport { get; set; }
        public static string Message { get; set; }

        public const string CompanyLogoPath = "~/Company_Images/Profile_Images/";
        public static byte[] GetBytesForCompanyLogo(string imageName)
        {
            if (imageName == null)
            {
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath("~/Company_Images/Default_Images/Image-not-found.png"));
            }
            else
            {
                var entirePath = CompanyLogoPath + imageName;
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath(entirePath));
            }
        }


        public const string OrganizationLogoPath = "~/Teknopole_Images/Profile_Images/";
        public static byte[] GetBytesForOrganizationLogo(string imageName)
        {
            if (imageName == null)
            {
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath("~/Teknopole_Images/Default_Images/Image-not-found.png"));
            }
            else
            {
                var entirePath = OrganizationLogoPath + imageName;
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath(entirePath));
            }
        }


        public const string EmployeePhotoPath = "~/Company_Images/Employee_Images/";
        public static byte[] GetBytesForEmployeePhoto(string imageName)
        {
            if (imageName == null)
            {
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath("~/Company_Images/Default_Images/Image-not-found.png"));
            }
            else
            {
                var entirePath = EmployeePhotoPath + imageName;
                return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath(entirePath));
            }
        }

        public static byte[] GetBytesForAppLogo()
        {
            var entirePath = "~/Teknopole_Images/Default_Images/app.png";
            return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath(entirePath));
        }

        public static byte[] GetBytesForPaidSealLogo()
        {
            var entirePath = "~/Teknopole_Images/Default_Images/paid-seal.png";
            return System.IO.File.ReadAllBytes(HttpContext.Current.Server.MapPath(entirePath));
        }

        public enum AccountStatus
        {
            Guest = 0,
            Pending = 1,
            Approved = 2
        }
        public enum AccessStatus
        {
            Blocked = 1,
            Unblocked = 2
        }

        public enum AuthStatus
        {
            Pending = 1,
            Approved = 2,
            Suspended = 3
        }

        public enum ConcurrentStatus
        {
            Consumed = 699,
            Current = 700,
        }
        public enum PriceStatus
        {
            Default = 100,
        }

        public enum TaskAcknowledgementStatus
        {
            //Nobody accepted this task yet
            //Nobody has seen this task yet
        }
    }
}