/// <reference path="app.js" />
CCDApp.controller('appController', function ($scope, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {

    //====================================================================Declaration=================================================================================





    //====================================================================Element Processing==========================================================================
    //For HTML Collapsing
    function updateCookie(name, value) {
        document.cookie = name + '=' + value + '; Path=/; Expires=' + new Date() + ';';;

    };


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
        var customertoken;
        var customertokenFromCookies = $cookies.get('CustomerToken');
        if (customertokenFromCookies) {
            customertoken = JSON.parse(customertokenFromCookies);
        } else {
            customertoken = null;
        }
        if (customertoken != null && customertoken != "") {
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
    }




    //====================================================================Miscellaneous Function======================================================================





    //====================================================================Garbage Code================================================================================

});