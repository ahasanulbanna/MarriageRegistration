MRApp.controller("resetpasswordController", function ($scope, $rootScope, $state, blockUI, resetpasswordServices, $cookies, toastr, $base64, $window, $timeout) {
    $scope.ResetPasswordByPasswordResetCode = function () {
        if ($scope.ResetPasswordForm.$invalid == false) {
            resetpasswordServices.ResetPasswordByPasswordResetCode($scope).then(function (response) {
                if (response.data.IsReport == "Ok") {
                    toastr.success(response.data.Message, "Success!")
                    $state.go("logIn");
                }
                else if (response.data.IsReport == "NotOk") {
                    toastr.error(response.data.Message, "Error!")
                }
            })
        }
        else {
            toastr.error("This form contains invalid data. Can not be submitted", 'Error!');
        }
    };
});