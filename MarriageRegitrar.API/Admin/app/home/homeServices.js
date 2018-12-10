MRApp.factory("homeServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetNumberOfRegisteredClients: function () {
            return $http({
                url: "/Api/Dashboard/GetNumberOfRegisteredClients",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountTotalTokenSold: function () {
            return $http({
                url: "/Api/Dashboard/GetCountTotalTokenSold",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountOfTotalTransection: function () {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalTransection",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountOfTotalLoanRequest: function () {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalLoanRequest",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
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
        GetCountOfTotalAirDropFreeCoinSubmission: function () {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalAirDropFreeCoinSubmission",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCountOfTotalYouTubeBountySubmission: function () {
            return $http({
                url: "/Api/Dashboard/GetCountOfTotalYouTubeBountySubmission",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetBarChartDataOfTransection: function () {
            return $http({
                url: "/Api/Dashboard/GetBarChartDataOfTransection",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetPieChartDataCustomerJoinedPerTimeTable: function () {
            return $http({
                url: "/Api/Dashboard/GetPieChartDataCustomerJoinedPerTimeTable",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetPieChartDataTransectionAsPerTimeTable: function () {
            return $http({
                url: "/Api/Dashboard/GetPieChartDataTransectionAsPerTimeTable",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetLineChartDataOfCoinRate: function () {
            return $http({
                url: "/Api/Dashboard/GetLineChartDataOfCoinRate",
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