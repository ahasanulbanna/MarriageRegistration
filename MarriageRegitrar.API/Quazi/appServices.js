MRApp.factory("appServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        Logout: function () {
            return $http({
                url: "/Api/Public/LogOut",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                },
                async: false
            });
        }
    }
}]);