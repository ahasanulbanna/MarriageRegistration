CCDApp.factory("airdropcoinclaimresultServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetCustomerListRequestedForAirDropCoinClaim: function () {
            return $http({
                url: "/Api/Claim/GetCustomerListRequestedForAirDropCoinClaim",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        GetAirDropCoinClaimListByCustomerIdForAdmin: function (id) {
            return $http({
                url: "/Api/Claim/GetAirDropCoinClaimListByCustomerIdForAdmin/" + id,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        EvaluateAirDropCoinClaimResult: function (airDropCoinClaimJoinResults) {
            return $http({
                url: "/Api/Claim/EvaluateAirDropCoinClaimResult",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "POST",
                data: airDropCoinClaimJoinResults,
                async: false
            });
        },
    };
}]);