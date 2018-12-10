MRApp.controller("activateaccountController", function ($scope, $rootScope, $state, blockUI, activateaccountServices, $cookies, toastr, $base64, $window, $timeout) {
    $scope.Activate = function () {
        if ($scope.ActivateForm.$invalid == false) {
            activateaccountServices.VerifyCustomerActivation($scope.ActivationEmail, $scope.ActivationCode).then(function (response) {
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
    $scope.openAccountActivationModal = function () {
        $('#AccountActivationModal').modal('show');
    };

    $scope.cancelAccountActivationModal = function () {
        $('#AccountActivationModal').modal('hide');
        $timeout(function () {
            $scope.AccountActivationEmail = "";
            $scope.AccountActivationForm.$setPristine();
            $scope.AccountActivationForm.$setUntouched();
        }, 200)
    };
    $scope.ReSendAccountActivationCode = function () {
        activateaccountServices.ReSendAccountActivationCode($scope.AccountActivationEmail).then(function (response) {
            if (response.data.IsReport == "Ok") {
                toastr.success(response.data.Message, "Success!");
            }
            else if (response.data.IsReport == "NotOk") {
                toastr.error(response.data.Message, "Error!");
            }
        })
        .then(function () {
            $scope.cancelAccountActivationModal();
        })
        .then(function () {
            $timeout(function () {
                $state.reload();
            }, 500)
        })
    };

    if ($rootScope.AccountNotActivated == true) {
        //$('.modal-backdrop').remove();
        toastr.error("You account is not activated. Please activate your account",
            { autoDismiss: false, timeOut: 600000, closeButton: true }
        );
        $rootScope.AccountNotActivated = false;
    }
    if ($rootScope.NoTimeTableErrorFound == true) {
        $rootScope.NoTimeTableErrorFound = false;
        $state.go('register');
    }
});