/// <reference path="app.js" />
CCDApp.controller('registerController', function ($scope, registerServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {

    //====================================================================Declaration=================================================================================





    //====================================================================Element Processing==========================================================================





    //====================================================================Object Processing===========================================================================

    $scope.AcceptTandC = function () {
        $scope.IsAccepted = 1;
        $timeout(function () {
            $('#TandCModal').modal("hide");
        },
            200);
    }



    //====================================================================Modal Operation=============================================================================

    $scope.openTandCModal = function () {
        $('#TandCModal').modal("show");
    }

    $scope.closeTandCModal = function () {
        $timeout(function () {
            $('#TandCModal').modal("hide");
        },
            200);
    }



    //====================================================================DB Operation================================================================================

    $scope.SaveRegister = function () {
        if ($scope.RegisterForm.$invalid === false) {
            if ($scope.IsAccepted === 1) {
                registerServices.CreateCustomer($scope.Customer).then(function (response) {
                    if (response.data.IsReport == "Ok") {
                        toastr.success(response.data.Message, "Success!");
                    } else if (response.data.IsReport == "NotOk") {
                        toastr.error(response.data.Message, "Error!");
                    }
                })
                    .then(function () {
                        $scope.Customer = {};
                        $scope.IsAccepted = 0;
                        $scope.RegisterForm.$setPristine();
                        $scope.RegisterForm.$setUntouched();
                    })
                    .then(function () {
                        $state.go("activateaccount");
                    });
            }
            else {
                toastr.error("You've accept the terms and conditions", "Error!");
            }
        }
        else {
            toastr.error("This form contains invalid data. Can not be submitted", "Error!");
        }
    }




    //====================================================================Miscellaneous Function======================================================================





    //====================================================================Garbage Code================================================================================
});