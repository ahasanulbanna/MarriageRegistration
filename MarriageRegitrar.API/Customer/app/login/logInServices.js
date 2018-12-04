CCDApp.factory("logInServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {

        LogIn: function (param) {
            return $http({
                url: "/Api/Authenticate/LogIn",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: param,
                async: false
            });
        },
        SendResetPasswordCode: function (email) {
            return $http({
                url: "/Api/Public/SendResetPasswordCode/" + email,
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        }

    };
}]);
