MRApp.factory("profileServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        UpdateAdminGeneralInfo: function (admin) {
            return $http({
                url: "/Api/Admin/UpdateAdminGeneralInfo",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: admin,
                method: "POST",
                async: false
            });
        },
        UpdateAdminPassword: function (adminId, oldPassword, newPassword) {
            return $http({
                url: "/Api/Admin/UpdateAdminPassword/" + adminId + "/" + oldPassword + "/" + newPassword,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "POST",
                async: false
            });
        },
        GetAdminDetailsByAdminId: function (adminId) {
            return $http({
                url: "/Api/Admin/GetAdminDetailsByAdminId/" + adminId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
    };
}]);