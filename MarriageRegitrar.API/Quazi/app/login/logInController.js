MRApp.controller("logInController", function ($scope, $rootScope, $state, blockUI, logInServices, $cookies, toastr, $base64, $window, $timeout) {

    $scope.Loader = false;

    

    $scope.LogIn = function (LogInDataQuazi) {

        if ($scope.logInForm.$invalid === false) {
            logInServices.LogIn($scope.LogInDataQuazi).then(function (response) {
                if (response.status === 200) {
                    window.localStorage.setItem('QuaziLoginData', JSON.stringify(response.data));
                    toastr.success(response.data.Message, "Success!");
                    $state.go('home');

                } else if (response.status >= 400) {
                    toastr.error(response.data.Message, "Incorrect Login Data", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            });

        }
        else {
            toastr.error("Login Faild", "Error!");
        }
    };


});