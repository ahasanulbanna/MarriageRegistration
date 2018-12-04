CCDApp.factory("activateaccountServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        VerifyCustomerActivation: function (email, activationCode) {
            return $http({
                url: "/Api/Public/VerifyCustomerActivation",
                method: "POST",
                data: {
                    Email: email,
                    ActivationCode: activationCode
                },
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        },
        ReSendAccountActivationCode: function (email) {
            return $http({
                url: "/Api/Public/ReSendAccountActivationCode/" + email,
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
