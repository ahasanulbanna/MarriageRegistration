CCDApp.factory("loanschemaServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        CreateLoanScheme: function (loanScheme) {
            return $http({
                url: "/Api/LoanScheme/CreateLoanScheme",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: loanScheme,
                method: "POST",
                async: false
            });
        },
        UpdateLoanScheme: function (loanScheme) {
            return $http({
                url: "/Api/LoanScheme/UpdateLoanScheme",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: loanScheme,
                method: "POST",
                async: false
            });
        },
        GetLoanSchemeDetailsByLoanSchemeId: function (loanSchemeId) {
            return $http({
                url: "/Api/LoanScheme/GetLoanSchemeDetailsByLoanSchemeId/" + loanSchemeId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetAllLoanSchemeList: function () {
            return $http({
                url: "/Api/LoanScheme/GetAllLoanSchemeList",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetAllCryptoCurrencyListings: function () {
            return $http({
                url: "/Api/CoinScheme/GetAllCryptoCurrencyListings",
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        },
    };
}]);