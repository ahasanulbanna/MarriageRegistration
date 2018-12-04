var CCDApp = angular.module("CCDApp", ['ui.router', 'ngMessages', 'toastr', 'ngSanitize', 'ngAnimate', "ngCookies", "base64", "blockUI", "chart.js", "timer"]);

CCDApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, toastrConfig, blockUIConfig) {

    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body',
        progressBar: true,
        allowHtml: true
    });

    blockUIConfig.message = 'Please Wait ...';

});


CCDApp.run(function ($rootScope, $http, $q, $state, toastr, $timeout, appServices, $cookies, $window) {

});





