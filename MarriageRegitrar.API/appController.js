/// <reference path="app.js" />
MRApp.controller('appController', function ($scope, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, $state) {
    //====================================================================Declaration=================================================================================
    $scope.Date = "2018/12/05";




    //====================================================================Element Processing==========================================================================




    //====================================================================Element Events==========================================================================

    $scope.DownloadWhitePaper = function () {
        toastr.info("Coming Soon!", "Info!");
    };
    $scope.ComingSoon = function () {
        toastr.info("This feature is coming soon", "Info")
    }





    //====================================================================Object Processing===========================================================================





    //====================================================================Modal Operation=============================================================================





    //====================================================================DB Operation================================================================================
    //appServices.GetTimeTableDetails().then(function (response) {
    //    $scope.Current = response.data.Current;
    //    $scope.ComingSoon = response.data.ComingSoon;
    //    if ($scope.Current != null) {
    //        $scope.Current.Start = new Date(response.data.Current.Start).getTime();
    //        $scope.Current.End = new Date(response.data.Current.End).getTime();
    //    }
    //    if ($scope.ComingSoon != null) {
            
    //        $scope.ComingSoon.End = new Date(response.data.ComingSoon.End).getTime();
    //        $scope.ComingSoon.Start = new Date(response.data.ComingSoon.Start).getTime();
    //    }
    //});
    //appServices.GetCurrentCCDRate().then(function (response) {
    //    $scope.Rate = response.data;
    //});




    //====================================================================Miscellaneous Function======================================================================





    //====================================================================Garbage Code================================================================================
});