/// <reference path="app.js" />
MRApp.controller('profileController', function ($scope, profileServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================
    $scope.Customer = {};



    //====================================================================Element Processing==========================================================================
    //Modal Scroll Stuck Issue Solve
    $('.modal').on('hidden.bs.modal', function (e) {
        if ($('.modal').hasClass('in')) {
            $('body').addClass('modal-open');
        }
    });

    //====================================================================Object Processing===========================================================================




    //====================================================================Modal Operation=============================================================================




    //====================================================================DB Operation================================================================================
    profileServices.GetCustomerVitalDetailsByCustomerId($rootScope.CustomerId).then(function (response) {
        $scope.Customer = response.data;
        console.log(response.data);
    });

    $scope.UpdateCustomerGeneralInfo = function () {
        profileServices.UpdateCustomerGeneralInfo($scope.Customer).then(function (response) {
            if (response.data.IsReport == "Ok") {
                toastr.success(response.data.Message, "Success!");
                var date = new Date();
                var expireTime = date.getTime() + 31540000000000; // 3 hours
                date.setTime(expireTime);
                $cookies.put('CustomerName', angular.toJson($scope.Customer.Username), { 'expires': date, 'path': '/' });
            }
            else if (response.data.IsReport == "NotOk") {
                toastr.error(response.data.Message, "Error!");
            }
        })
        .then(function () {
            $state.reload();
        })
    };

    $scope.UpdateCustomerPassword = function () {
        profileServices.UpdateCustomerPassword($scope.Customer.Id, $scope.OldPassword, $scope.NewPassword).then(function (response) {
            if (response.data.IsReport == "Ok") {
                toastr.success(response.data.Message, "Success!");
            }
            else if (response.data.IsReport == "NotOk") {
                toastr.error(response.data.Message, "Error!");
            }
        })
        .then(function () {
            $state.reload();
        })
    };

    //====================================================================Miscellaneous Function======================================================================
    $scope.LogOut = function () {
        var admintoken;
        var admintokenFromCookies = $cookies.get('CustomerToken');
        if (admintokenFromCookies) {
            admintoken = JSON.parse(admintokenFromCookies);
        } else {
            admintoken = null;
        }
        if (admintoken != null && admintoken != "") {
            appServices.Logout().then(function (response) {
                $rootScope.CompanyToken = null;
                if (response.data == true) {

                    $cookies.remove('CustomerToken', { path: '/' });
                    $cookies.remove('CustomerName', { path: '/' });
                    $cookies.remove('CustomerId', { path: '/' });

                    //Reset the HTML collapser;
                    $cookies.remove('HTMLCollapseStatus', { path: '/' });
                    //$window.location.href = "/Company/#/logIn";
                    $state.go("logIn");

                    toastr.info("You have logged out !", {
                        timeOut: 2000
                    });
                }
            });
        }
        else {
            $cookies.remove('CustomerToken', { path: '/' });
            $cookies.remove('CustomerName', { path: '/' });
            $cookies.remove('CustomerId', { path: '/' });

            //Reset the HTML collapser;
            $cookies.remove('HTMLCollapseStatus', { path: '/' });
            //$window.location.href = "/Company/#/logIn";
            $state.go("logIn");

            toastr.info("You are already logged out !", {
                timeOut: 2000
            });
        }
    };


    //====================================================================Garbage Code================================================================================




});