CCDApp.controller('loanschemaController', function ($scope, loanschemaServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================

    //====================================================================Element Processing==========================================================================

    //----------Datatable Processing----------
    $scope.vm = {};
    //$scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(4).withOption('width', '10%').notSortable()
    ];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('paging', true)
        .withOption('searching', true)
        .withOption('info', true);

    //====================================================================Object Processing===========================================================================

    //====================================================================Modal Operation=============================================================================
    $scope.openEmptyLoanSchemeModal = function () {
        loanschemaServices.GetAllCryptoCurrencyListings().then(function (response) {
            $scope.AllCryptoCurrencyListings = response.data;
        })
        .then(function () {
            $('#LoanSchemeModal').modal('show');
        })
    };
    $scope.cancelLoanSchemeModal = function () {
        $('#LoanSchemeModal').modal('hide');
        $timeout(function () {
            $scope.LoanScheme = {};
            $scope.LoanSchemeForm.$setPristine();
            $scope.LoanSchemeForm.$setUntouched();
        }, 200)
    };
    $scope.openLoanSchemeModal = function (id) {
        loanschemaServices.GetLoanSchemeDetailsByLoanSchemeId(id).then(function (response) {
            $scope.LoanScheme = response.data;
        })
        .then(function () {
            loanschemaServices.GetAllCryptoCurrencyListings().then(function (response) {
                $scope.AllCryptoCurrencyListings = response.data;
            })
            .then(function () {
                var selected_coinname_Index = $scope.AllCryptoCurrencyListings.findIndex(x => x.name == $scope.LoanScheme.CurrencyOfLoanRepayment);
                if (selected_coinname_Index > -1) {
                    $scope.LoanScheme.CurrencyOfLoanRepayment = $scope.AllCryptoCurrencyListings[selected_coinname_Index]
                }
            })
            .then(function () {
                $('#LoanSchemeModal').modal('show');
            })
        })
    };

    $scope.openLoanSchemeInfoModal = function (id) {
        loanschemaServices.GetLoanSchemeDetailsByLoanSchemeId(id).then(function (response) {
            $scope.LoanScheme = response.data;
        })
        .then(function () {
            $('#LoanSchemeInfoModal').modal('show');
        })
    };

    $scope.cancelLoanSchemeInfoModal = function () {
        $('#LoanSchemeInfoModal').modal('hide');
        $timeout(function () {
            $scope.LoanScheme = {};
        }, 200)
    };


    //====================================================================DB Operation================================================================================
    loanschemaServices.GetAllLoanSchemeList().then(function (response) {
        $scope.LoanSchemeList = response.data;
    });

    $scope.CreateLoanScheme = function () {
        if ($scope.LoanSchemeForm.$invalid === false) {
            $scope.LoanScheme.AddedBy = $rootScope.AdminId;
            loanschemaServices.CreateLoanScheme($scope.LoanScheme).then(function (response) {
                if (response.data.IsReport === "Ok") {
                    toastr.success(response.data.Message, "Success!");
                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            })
            .then(function () {
                $scope.cancelLoanSchemeModal();
                $timeout(function () {
                    $state.reload();
                }, 200)
            });

        }
        else {
            toastr.error("This form contains invalid data. Can not be submitted", "Error!");
        }
    };

    $scope.UpdateLoanScheme = function () {
        if ($scope.LoanSchemeForm.$invalid === false) {
            $scope.LoanScheme.LastModifiedBy = $rootScope.AdminId;
            loanschemaServices.UpdateLoanScheme($scope.LoanScheme).then(function (response) {
                if (response.data.IsReport === "Ok") {
                    toastr.success(response.data.Message, "Success!");
                } else if (response.data.IsReport === "NotOk") {
                    toastr.error(response.data.Message, "Error!", { autoDismiss: false, timeOut: 600000, closeButton: true });
                }
            })
            .then(function () {
                $scope.cancelLoanSchemeModal();
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