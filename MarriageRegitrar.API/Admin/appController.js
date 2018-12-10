/// <reference path="app.js" />
MRApp.controller('appController', function ($scope, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {

    //====================================================================Declaration=================================================================================
    var date = new Date();
    var expireTime = date.getTime() + 31540000000000; // 3 hours
    date.setTime(expireTime);




    //====================================================================Element Processing==========================================================================
    $scope.HTMLCollapser = function () {
        if ($rootScope.HTMLCollapseStatus == "fixed left-sidebar-top") {
            updateCookie('HTMLCollapseStatus', "fixed left-sidebar-top left-sidebar-collapsed");
            $rootScope.HTMLCollapseStatus = "fixed left-sidebar-top left-sidebar-collapsed";
        }
        else if ($rootScope.HTMLCollapseStatus == "fixed left-sidebar-top left-sidebar-collapsed") {
            updateCookie('HTMLCollapseStatus', "fixed left-sidebar-top");
            $rootScope.HTMLCollapseStatus = "fixed left-sidebar-top";
        }
    }






    //====================================================================Object Processing===========================================================================





    //====================================================================Modal Operation=============================================================================





    //====================================================================DB Operation================================================================================
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
    }




    //====================================================================Miscellaneous Function======================================================================





    //====================================================================Garbage Code================================================================================

});