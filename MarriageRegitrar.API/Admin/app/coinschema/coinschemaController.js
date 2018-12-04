/// <reference path="app.js" />
CCDApp.controller('coinschemaController', function ($scope, coinschemaServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {

    //====================================================================Declaration=================================================================================
    $scope.CoinScheme = {};
    $scope.AllCryptoCurrencyListing = [];


    //====================================================================Element Processing==========================================================================
    //----------Datatable Processing----------
    $scope.vm = {};
    //$scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(4).withOption('width', '5%').notSortable()
    ];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('paging', true)
        .withOption('searching', true)
        .withOption('info', true);



    //====================================================================Object Processing===========================================================================
    $scope.ProcessCoinSchemeName = function (item, model, label) {
        $scope.CoinScheme.Name = model.name;
        $scope.CoinScheme.Symbol = model.symbol;
        $scope.CoinScheme.Website_Slug = model.website_slug;
    };



    //====================================================================Modal Operation=============================================================================
    $scope.openEmptyCoinSchemeModal = function () {
        coinschemaServices.GetAllCryptoCurrencyListings().then(function (response) {
            $scope.AllCryptoCurrencyListings = response.data;
        })
        .then(function () {
            $('#CoinSchemeModal').modal('show');
        })
    };

    $scope.cancelCoinSchemeModal = function () {
        $('#CoinSchemeModal').modal('hide');
        $timeout(function () {
            $scope.CoinScheme = {};
            $scope.CoinSchemeName = null;
            $scope.CoinSchemeForm.$setPristine();
            $scope.CoinSchemeForm.$setUntouched();
        }, 200)
    };

    $scope.openCoinSchemeModal = function (id) {
        coinschemaServices.GetCoinSchemeDetailsByCoinSchemeId(id).then(function (response) {
            $scope.CoinScheme = response.data;
        })
        .then(function () {
            coinschemaServices.GetAllCryptoCurrencyListings().then(function (response) {
                $scope.AllCryptoCurrencyListings = response.data;
            })
            .then(function () {
                var selected_coinname_Index = $scope.AllCryptoCurrencyListings.findIndex(x => x.symbol == $scope.CoinScheme.Symbol);
                if (selected_coinname_Index > -1) {
                    $scope.CoinSchemeName = $scope.AllCryptoCurrencyListings[selected_coinname_Index]
                }
            })
            .then(function () {
                $('#CoinSchemeModal').modal('show');
            })
        })
    };



    //====================================================================DB Operation================================================================================
    coinschemaServices.GetCoinSchemeList().then(function (response) {
        $scope.CoinSchemeList = response.data;
    });

    $scope.AddCoinScheme = function () {
        $scope.CoinScheme.AddedBy = $rootScope.AdminId;
        if ($scope.CoinSchemeForm.$invalid === false) {
            coinschemaServices.AddCoinScheme($scope.CoinScheme).then(function (response) {
                if (response.data.IsReport == "Ok") {
                    toastr.success(response.data.Message, "Success!");
                } else if (response.data.IsReport == "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            })
            .then(function () {
                $scope.cancelCoinSchemeModal();
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

    }

    $scope.UpdateCoinScheme = function () {
        $scope.CoinScheme.LastModifiedBy = $rootScope.AdminId;
        if ($scope.CoinSchemeForm.$invalid === false) {
            coinschemaServices.UpdateCoinScheme($scope.CoinScheme).then(function (response) {
                if (response.data.IsReport == "Ok") {
                    toastr.success(response.data.Message, "Success!");
                } else if (response.data.IsReport == "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            })
            .then(function () {
                $scope.cancelCoinSchemeModal();
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

    }

    $scope.ToggleCoinSchemeStatus = function (id, status) {
        var msg = "";
        if (status == "Active") {
            msg = "You are going to deactivate this coin scheme. Thus your customer (s) won't be able to use this coin for transection";
        }
        else if (status == "InActive") {
            msg = "You are going to activate this coin scheme. Thus your customer (s) will be able to use this coin for transection";
        }
        swal({
            title: "Are You Sure?",
            text: msg,
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Yes",
            cancelButtonClass: "btn btn-default",
            cancelButtonText: "No",
            closeOnConfirm: true
        },
        function (isConfirm) {
            if (isConfirm) {
                coinschemaServices.ToggleCoinSchemeStatus(id, $rootScope.AdminId).then(function (response) {
                    if (response.data.IsReport == "Ok") {
                        toastr.success(response.data.Message, "Success!");
                    }
                    else if (response.data.IsReport == "NotOk") {
                        toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                    }
                })
                .then(function () {
                    $state.reload();
                })
            } else {
                $state.reload();
            }
        });
    };

    //====================================================================Miscellaneous Function======================================================================




    //====================================================================Garbage Code================================================================================



});