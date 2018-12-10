MRApp.factory("profileServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        UpdateCustomerGeneralInfo: function (customer) {
            return $http({
                url: "/Api/Customer/UpdateCustomerGeneralInfo",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: customer,
                method: "POST",
                async: false
            });
        },
        UpdateCustomerPassword: function (customerId, oldPassword, newPassword) {
            return $http({
                url: "/Api/Customer/UpdateCustomerPassword/" + customerId + "/" + oldPassword + "/" + newPassword,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "POST",
                async: false
            });
        },
        GetCustomerVitalDetailsByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Customer/GetCustomerVitalDetailsByCustomerId/" + customerId,
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