MRApp.factory("registrarmarriageServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {

        RegistrarMarriage: function (MarriageDto) {
            return $http({
                url: "/Api/Marriage/RegistrarMarriage",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: MarriageDto,
                method: "POST",
                async: false
            });
        } 
    };
}]);