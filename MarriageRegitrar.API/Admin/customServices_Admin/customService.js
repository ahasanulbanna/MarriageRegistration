MRApp.factory("customService", ["$http", "$rootScope", "$window", "$timeout", "$cookies", function ($http, $rootScope, $window, $timeout, $cookies) {
    return {
        isLoggedIn: function () {
            var a = $cookies.get('AdminToken');
            if (a == null || a === 'undefined') {
                return false;
            } else {
                return true;
            }
        },

    };
}]);