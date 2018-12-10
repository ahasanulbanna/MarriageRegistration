/// <reference path="app.js" />
MRApp.controller('profileController', function ($scope, profileServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {
    //====================================================================Declaration=================================================================================
    $scope.Admin = {};



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
    profileServices.GetAdminDetailsByAdminId($rootScope.AdminId).then(function (response) {
        $scope.Admin = response.data;
    });

    $scope.UpdateAdminGeneralInfo = function () {
        profileServices.UpdateAdminGeneralInfo($scope.Admin).then(function (response) {
            if (response.data.IsReport == "Ok") {
                toastr.success(response.data.Message, "Success!");
            }
            else if (response.data.IsReport == "NotOk") {
                toastr.error(response.data.Message, "Error!");
            }
        })
        .then(function () {
            var date = new Date();
            var expireTime = date.getTime() + 31540000000000; // 3 hours
            date.setTime(expireTime);
            $cookies.put('AdminFullName', angular.toJson($scope.Admin.Name), { 'expires': date, 'path': '/' });
        })
        .then(function () {
            $state.reload();
        })
    };

    $scope.UpdateAdminPassword = function () {
        profileServices.UpdateAdminPassword($scope.Admin.Id, $scope.OldPassword, $scope.NewPassword).then(function (response) {
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
        var admintokenFromCookies = $cookies.get('AdminToken');
        if (admintokenFromCookies) {
            admintoken = JSON.parse(admintokenFromCookies);
        } else {
            admintoken = null;
        }
        if (admintoken != null && admintoken != "") {
            appServices.Logout().then(function (response) {
                $rootScope.CompanyToken = null;
                if (response.data == true) {

                    $cookies.remove('AdminToken', { path: '/' });
                    $cookies.remove('AdminName', { path: '/' });
                    $cookies.remove('AdminId', { path: '/' });

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
            $cookies.remove('AdminToken', { path: '/' });
            $cookies.remove('AdminName', { path: '/' });
            $cookies.remove('AdminId', { path: '/' });

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