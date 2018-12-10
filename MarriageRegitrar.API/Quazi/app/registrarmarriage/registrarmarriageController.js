MRApp.controller('registrarmarriageController', function ($scope, registrarmarriageServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================




    //====================================================================Element Processing==========================================================================




    //====================================================================Object Processing===========================================================================




    //====================================================================Modal Operation=============================================================================




    //====================================================================DB Operation================================================================================
    
    $scope.MarriageRegistrar = function (Marriage) {
        registrarmarriageServices.RegistrarMarriage($scope.Marriage).then(function (response) {
            if (response.data.isReport === "IsOk") {
                toastr.success(response.data.Message);
            }
            else if (response.data.isReport === "NotOk") {
                toastr.error(response.data.Message, { autoDismiss: false, timeOut: 600000, closeButton: true });
            }
        });
        };


    //====================================================================Miscellaneous Function======================================================================




    //====================================================================Garbage Code================================================================================
});