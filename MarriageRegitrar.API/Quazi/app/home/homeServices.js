MRApp.factory("homeServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetCurrentTimeTableEndIn: function () {
            return $http({
                url: "/Api/Dashboard/GetCurrentTimeTableEndIn",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetBonusOfCurrentTimeTable: function () {
            return $http({
                url: "/Api/Dashboard/GetBonusOfCurrentTimeTable",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountOfTotalTransectionByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalTransectionByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountOfTotalLoanRequestByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalLoanRequestByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetBarChartDataOfTransectionByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetBarChartDataOfTransectionByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetPieChartDataTransectionAsPerTimeTableByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetPieChartDataTransectionAsPerTimeTableByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCurrentCCDRate: function () {
            return $http({
                url: "/Api/Dashboard/GetCurrentCCDRate",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetKycStatusByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetKycStatusByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetAirDropCoinSubmissionStatusByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetAirDropCoinSubmissionStatusByCustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetYoutubeBountySubmissionStatusBycustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetYoutubeBountySubmissionStatusBycustomerId/" + customerId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetWalletBanalceByCustomerId: function (customerId) {
            return $http({
                url: "/Api/Dashboard/GetWalletBanalceByCustomerId/" + customerId,
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