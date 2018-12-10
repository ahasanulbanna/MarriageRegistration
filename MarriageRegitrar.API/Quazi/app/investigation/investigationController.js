///// <reference path="app.js" />
MRApp.controller('InvestigationController', function ($scope, InvestigationServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================




    //====================================================================Element Processing==========================================================================




    //====================================================================Object Processing===========================================================================




    //====================================================================Modal Operation=============================================================================




    //====================================================================DB Operation================================================================================

    $scope.BrideInfoShow = true;
    $scope.CheckBride = function (Bride) {
        if ($scope.BrideInvestigationForm.$invalid === false) {
            InvestigationServices.CheckBride($scope.Bride.NidNo).then(function (response) {
                if (response.data.NidCheckingResult !== null) {
                    $scope.BrideInfoShow = false;
                    window.localStorage.setItem('BrideData', JSON.stringify(response.data));
                    $scope.BrideInfo = response.data;

                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            });

        }
        else {
            toastr.error("Login Faild", "Error!");
        }
    };

    $scope.MarriageButtonHideResult = true;
    $scope.BridegroomInfoShow = true;
    $scope.CheckBridegroom = function (Bridegroom) {

        if ($scope.BridegroomInvestigationForm.$invalid === false) {
            InvestigationServices.CheckBridegroom($scope.Bridegroom.NidNo).then(function (response) {
                if (response.data.NidCheckingResult !== null) {
                    $scope.BridegroomInfoShow = false;
                    window.localStorage.setItem('BridegroomData', JSON.stringify(response.data));
                    $scope.BridegroomInfo = response.data;
                    if ($scope.BrideInfo.NidCheckingResult != null && $scope.BridegroomInfo.NidCheckingResult != null) {
                        $scope.MarriageButtonHideResult = false;
                    }

                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            });

        }
        else {
            toastr.error("Login Faild", "Error!");
        }
    };

    $scope.MarriageRegistrar = function () {
        $state.go('registrarmarriage');
    }


    //====================================================================Miscellaneous Function======================================================================




    //====================================================================Garbage Code================================================================================
});