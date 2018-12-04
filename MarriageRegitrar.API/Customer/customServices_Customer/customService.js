CCDApp.factory("customService", ["$http", "$rootScope", "$window", "$timeout", "$cookies", function ($http, $rootScope, $window, $timeout, $cookies) {
    return {
        isLoggedIn: function () {
            var a = $cookies.get('CustomerToken');
            if (a == null || a === 'undefined') {
                return false;
            } else {
                return true;
            }
        },

    };
}]);