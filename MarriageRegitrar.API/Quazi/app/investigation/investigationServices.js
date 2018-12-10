MRApp.factory("InvestigationServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {

        CheckBride: function (nid) {
            return $http({
                url: "/Api/Investigation/CheckBride/" + nid,
                method: "Get",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        },
        CheckBridegroom: function (nid) {
            return $http({
                url: "/Api/Investigation/CheckBridegroom/" + nid,
                method: "Get",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                async: false
            });
        }

    };
}]);
