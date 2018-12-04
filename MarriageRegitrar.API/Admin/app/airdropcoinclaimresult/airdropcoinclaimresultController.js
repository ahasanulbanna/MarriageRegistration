CCDApp.controller('airdropcoinclaimresultController', function ($scope, airdropcoinclaimresultServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================
    $scope.CustomerListRequestedForAirDropCoinClaim = [];
    $scope.AirDropCoinClaimList = [];


    //====================================================================Element Processing==========================================================================

    //----------Datatable Processing----------
    $scope.vm = {};
    //$scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(2).withOption('width', '5%').notSortable()
    ];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('paging', true)
        .withOption('searching', true)
        .withOption('info', true);

    //====================================================================Object Processing===========================================================================

    //====================================================================Modal Operation=============================================================================
    $scope.openAirDropCoinClaimListModal = function (id) {
        airdropcoinclaimresultServices.GetAirDropCoinClaimListByCustomerIdForAdmin(id).then(function (response) {
            console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                response.data[i].EvaluatedBy = $rootScope.AdminId;
            }
            $scope.AirDropCoinClaimList = response.data;
        })
        .then(function () {
            $timeout(function () {
                $('#' + $scope.AirDropCoinClaimList[0].TriggerElement).trigger("click");
            }, 200)
        })
        .then(function () {
            $('#AirDropCoinClaimListModal').modal('show');
        })
    };
    $scope.cancelAirDropCoinClaimListModal = function () {
        $('#AirDropCoinClaimListModal').modal('hide');
        $timeout(function () {
            $scope.AirDropCoinClaimList = [];
            $scope.AirDropCoinClaimListForm.$setPristine();
            $scope.AirDropCoinClaimListForm.$setUntouched();
        }, 200)
    };



    //====================================================================DB Operation================================================================================
    airdropcoinclaimresultServices.GetCustomerListRequestedForAirDropCoinClaim().then(function (response) {
        $scope.CustomerListRequestedForAirDropCoinClaim = response.data;
    });

    $scope.EvaluateAirDropCoinClaimResult = function () {
        swal({
            title: "Are You Sure?",
            text: "You are going to Approve this Air-Drop Coin Claim Bounty",
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
                airdropcoinclaimresultServices.EvaluateAirDropCoinClaimResult($scope.AirDropCoinClaimList).then(function (response) {
                    if (response.data.IsReport == "Ok") {
                        toastr.success(response.data.Message, "Success!");
                    }
                    else if (response.data.IsReport == "NotOk") {
                        toastr.success(response.data.Message, "Error!");
                    }
                })
                .then(function () {
                    $scope.cancelAirDropCoinClaimListModal();
                })
                .then(function () {
                    $timeout(function () {
                        $state.reload();
                    }, 200)
                })
            }
            else {
            }
        });
    };



    //====================================================================Miscellaneous Function======================================================================





    //====================================================================Garbage Code================================================================================

});