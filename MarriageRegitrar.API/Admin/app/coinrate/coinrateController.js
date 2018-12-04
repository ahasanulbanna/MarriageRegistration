/// <reference path="app.js" />
CCDApp.controller('coinrateController', function ($scope, coinrateServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================




    //====================================================================Element Processing==========================================================================
    //----------Datatable Processing----------
    $scope.vm = {};
    //$scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(3).withOption('width', '5%').notSortable()
    ];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('paging', true)
        .withOption('searching', true)
        .withOption('info', true)
        .withOption('order', [1, 'asc']);;



    //====================================================================Object Processing===========================================================================




    //====================================================================Modal Operation=============================================================================
    $scope.openEmptyCoinRateModal = function () {
        $('#CoinRateModal').modal('show');
    };

    $scope.cancelCoinRateModal = function () {
        $('#CoinRateModal').modal('hide');
        $timeout(function () {
            $scope.CoinRate = {};
            $scope.CoinRateForm.$setPristine();
            $scope.CoinRateForm.$setUntouched();
        }, 200)
    };

    $scope.openCoinRateInfoModal = function (id) {
        coinrateServices.GetCoinRateDetailsByCoinRateId(id).then(function (response) {
            $scope.CoinRate = response.data;
        })
        .then(function () {
            $('#CoinRateInfoModal').modal('show');
        })
    };

    $scope.cancelCoinRateInfoModal = function () {
        $('#CoinRateInfoModal').modal('hide');
        $timeout(function () {
            $scope.CoinRate = {};
        }, 200)
    };


    //====================================================================DB Operation================================================================================
    coinrateServices.GetAllCoinRateList().then(function (response) {
        $scope.CoinRateList = response.data;
    });



    $scope.AddCoinRate = function () {
        $scope.CoinRate.AddedBy = $rootScope.AdminId;
        if ($scope.CoinRateForm.$invalid === false) {
            coinrateServices.AddCoinRate($scope.CoinRate).then(function (response) {
                if (response.data.IsReport === "Ok") {
                    toastr.success(response.data.Message, "Success!");
                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            })
            .then(function () {
                $scope.cancelCoinRateModal();
            })
            .then(function () {
                $timeout(function () {
                    $state.reload();
                }, 200)
            });
        }
        else {
            toastr.error("This form contains invalid data. Can not be submitted", "Error!");
        }
    };






    //====================================================================Miscellaneous Function======================================================================




    //====================================================================Garbage Code================================================================================

});