MRApp.controller("logInController", function ($scope, $rootScope, $state, blockUI, logInServices, $cookies, toastr, $base64, $window, $timeout) {

    $scope.Loader = false;


    //Login Function
    $scope.LogIn = function (LogInDataAdmin) {

        if ($scope.logInForm.$invalid === false) {
            logInServices.LogIn($scope.LogInDataAdmin).then(function (response) {
                if (response.status === 200) {
                    window.localStorage.setItem('AdminLoginData', response.data);
                    toastr.success(response.data.Message, "Success!");
                    $state.go('home');
                  
                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            });

        }
        else {
            toastr.error("Login Faild", "Error!");
        }
      
    };
});