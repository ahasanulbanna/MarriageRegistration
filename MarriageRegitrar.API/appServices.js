MRApp.factory("appServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetTimeTableDetails: function () {
            return $http({
                url: "/Api/Index/GetTimeTableDetails",
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
                url: "/Api/Index/GetCurrentCCDRate",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
    }
}]);