/// <reference path="app.js" />
CCDApp.controller('loanrequestController', function ($scope, loanrequestServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================
    $scope.LoanRequest = {};
    $scope.RejectLoanRequest = {};



    //====================================================================Element Processing==========================================================================
    //----------Datatable Processing----------
    $scope.vm = {};
    //$scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(6).withOption('width', '5%').notSortable()
    ];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('paging', true)
        .withOption('searching', true)
        .withOption('info', true);

    //Modal Scroll Stuck Issue Solve
    $('.modal').on('hidden.bs.modal', function (e) {
        if ($('.modal').hasClass('in')) {
            $('body').addClass('modal-open');
        }
    });

    //====================================================================Object Processing===========================================================================




    //====================================================================Modal Operation=============================================================================
    $scope.cancelLoanRequestInfoModal = function () {
        $('#LoanRequestInfoModal').modal('hide');
        $timeout(function () {
            $scope.LoanRequest = {};
            $scope.RejectLoanRequest = {};
        }, 200)
    };
    $scope.openLoanRequestInfoModal = function (id) {
        loanrequestServices.GetLoanRequestDetailsByLoanRequestId(id).then(function (response) {
            $scope.LoanRequest = response.data;;
        })
        .then(function () {
            $('#LoanRequestInfoModal').modal('show');
        })
    };
    $scope.openRejectLoanRequestModal = function () {
        $('#RejectLoanRequestModal').modal('show');
    };
    $scope.cancelRejectLoanRequestModal = function () {
        $('#RejectLoanRequestModal').modal('hide');
        $timeout(function () {
            $scope.RejectLoanRequest = {};
            $scope.RejectLoanRequestForm.$setPristine();
            $scope.RejectLoanRequestForm.$setUntouched();
        }, 200)
    };




    //====================================================================DB Operation================================================================================
    loanrequestServices.GetAllLoanRequestList().then(function (response) {
        $scope.LoanRequestList = response.data;
    });

    $scope.ApproveLoanRequestByLoanRequestId = function () {


        swal({
            title: "Are You Sure?",
            text: "You are going to approve this loan request",
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
                loanrequestServices.ApproveLoanRequestByLoanRequestId($scope.LoanRequest.Id, $rootScope.AdminId).then(function (response) {
                    if (response.data.IsReport == "Ok") {
                        toastr.success(response.data.Message, "Success!");
                    }
                    else if (response.data.IsReport == "NotOk") {
                        toastr.error(response.data.Message, "Error!");
                    }
                })
                .then(function () {
                    $scope.cancelLoanRequestInfoModal();
                })
                .then(function () {
                    $timeout(function () {
                        $state.reload();
                    }, 300)
                })
            }
            else {
                //$scope.cancelRejectLoanRequestModal();
            }
        });
    };

    $scope.RejectLoanRequestByLoanRequestId = function () {

        swal({
            title: "Are You Sure?",
            text: "You are going to reject this loan request",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn btn-danger",
            confirmButtonText: "Yes",
            cancelButtonClass: "btn btn-default",
            cancelButtonText: "No",
            closeOnConfirm: true
        },
        function (isConfirm) {
            if (isConfirm) {
                $scope.RejectLoanRequest.LoanRequestId = $scope.LoanRequest.Id,
                $scope.RejectLoanRequest.LoanStatusUpdatedBy = $rootScope.AdminId

                loanrequestServices.RejectLoanRequestByLoanRequestId($scope.RejectLoanRequest).then(function (response) {
                    if (response.data.IsReport == "Ok") {
                        toastr.success(response.data.Message, "Success!");
                    }
                    else if (response.data.IsReport == "NotOk") {
                        toastr.error(response.data.Message, "Error!");
                    }
                })
                .then(function () {
                    $scope.cancelRejectLoanRequestModal();
                })
                .then(function () {
                    $scope.cancelLoanRequestInfoModal();
                })
                .then(function () {
                    $timeout(function () {
                        $state.reload();
                    }, 300)
                });
            }
            else {
                $scope.cancelRejectLoanRequestModal();
            }
        });
    }


    //====================================================================Miscellaneous Function======================================================================




    //====================================================================Garbage Code================================================================================




});