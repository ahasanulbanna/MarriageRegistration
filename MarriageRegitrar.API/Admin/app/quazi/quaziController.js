
MRApp.controller('quaziController', function ($scope, quaziServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {






    $scope.openEmptyQuaziModal = function () {
        $('#quaziModal').modal('show');
    };


    $scope.canceQuaziModal = function () {
        $('#quaziModal').modal('hide');
        $timeout(function () {
            $scope.Quazi = {};
            $scope.QuaziForm.$setPristine();
            $scope.QuaziForm.$setUntouched();
        }, 200)
    };
    $scope.openQuaziModal = function (id) {
        quaziServices.GetQuaziByQuaziId(id).then(function (response) {
            $scope.Quazi = response.data;
        })
            .then(function () {
              
                $('#quaziModal').modal('show');
            })
    };


  
    quaziServices.GetQuaziList().then(function (response) {
        $scope.QuaziList = response.data;
    });

   


        $scope.dataTableOpt = {
            //custom datatable options 
            // or load data through ajax call also
            "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, 'All']]
    };

    $scope.AdminId = window.localStorage.getItem('AdminLoginData');
    $scope.AddQuazi = function (Quazi) {
        $scope.Quazi.AdminId = $scope.AdminId;
        if ($scope.QuaziForm.$invalid === false) {
            quaziServices.AddNewQuazi($scope.Quazi).then(function (response) {
                if (response.data.IsReport === "IsOk") {
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

    


});