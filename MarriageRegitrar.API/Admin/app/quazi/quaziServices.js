MRApp.factory("quaziServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetQuaziList: function () {
            return $http({
                url: "/Api/Quazi/QuaziList",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },

        AddNewQuazi: function (Quazi) {
            return $http({
                url: "/Api/Quazi/AddNewQuazi",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: Quazi,
                method: "POST",
                async: false
            });
        },
        GetQuaziByQuaziId: function (Id) {
            return $http({
                url: "/Api/Quazi/GetQuaziByQuaziId/"+Id,
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