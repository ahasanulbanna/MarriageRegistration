MRApp.factory("resetpasswordServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        ResetPasswordByPasswordResetCode: function (scope) {
            return $http({
                url: "/Api/Public/ResetPasswordByPasswordResetCode",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: {
                    Password: scope.Password,
                    ResetPasswordCode: scope.ResetPasswordCode,
                    LogoutFromAllSession: scope.LogoutFromAllSession
                },
                async: false
            });
        },

    };
}]);
