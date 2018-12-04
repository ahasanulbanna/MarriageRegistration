CCDApp.controller("logInController", function ($scope, $rootScope, $state, blockUI, logInServices, $cookies, toastr, $base64, $window, $timeout) {

    $scope.Loader = false;

    

    $scope.LogIn = function (logInForm) {
   
        $state.go('home');
    }


});