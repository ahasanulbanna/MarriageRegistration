CCDApp.factory("coinrateServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        AddCoinRate: function (coinRate) {
            return $http({
                url: "/Api/CoinRate/AddCoinRate",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: coinRate,
                method: "POST",
                async: false
            });
        },
        GetAllCoinRateList: function () {
            return $http({
                url: "/Api/CoinRate/GetAllCoinRateList",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetCoinRateDetailsByCoinRateId: function (coinRateId) {
            return $http({
                url: "/Api/CoinRate/GetCoinRateDetailsByCoinRateId/" + coinRateId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        }
    };
}]);