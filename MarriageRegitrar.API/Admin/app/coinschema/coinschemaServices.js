CCDApp.factory("coinschemaServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetCoinSchemeList: function () {
            return $http({
                url: "/Api/CoinScheme/GetAllCoinSchemeList",
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
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
        GetCoinSchemeDetailsByCoinSchemeId: function (id) {
            return $http({
                url: "/Api/CoinScheme/GetCoinSchemeDetailsByCoinSchemeId/" + id,
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        },
        AddCoinScheme: function (coinScheme) {
            return $http({
                url: "/Api/CoinScheme/AddCoinScheme",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: coinScheme,
                method: "POST",
                async: false
            });
        },
        UpdateCoinScheme: function (coinScheme) {
            return $http({
                url: "/Api/CoinScheme/UpdateCoinScheme",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: coinScheme,
                method: "POST",
                async: false
            });
        },
        ToggleCoinSchemeStatus: function (id, lastModifiedBy) {
            return $http({
                url: "/Api/CoinScheme/ToggleCoinSchemeStatus/" + id + "/" + lastModifiedBy,
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