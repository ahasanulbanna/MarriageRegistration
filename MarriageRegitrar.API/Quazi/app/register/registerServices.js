MRApp.factory("registerServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        CreateCustomer: function (customer) {
            return $http({
                url: "http://localhost:54550/Api/Public/CreateCustomer",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: customer,
                method: "POST",
                async: false
            });
        },
        GetCustomerDetailsByCustomerId: function (id) {
            return $http({
                url: "http://localhost:54550/Api/Customer/GetCustomerDetailsByCustomerId/" + id,
                method: "GET",
                async: false
            });
        },
        UpdateCustomerGeneralInfo: function (customer) {
            return $http({
                url: "http://localhost:54550/Api/Customer/UpdateCustomerGeneralInfo",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: customer,
                method: "POST",
                async: false
            });
        },
        UpdateCustomerPassword: function (id, oldPassword, newPassword) {
            return $http({
                url: "http://localhost:54550/Api/Customer/UpdateCustomerPassword/" + id + "/" + oldPassword + "/" + newPassword,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "POST",
                async: false
            });
        }
    };
}]);