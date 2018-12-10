var MRApp = angular.module("MRApp", ['ui.router', 'ngMessages', 'datatables', 'toastr', 'ngSanitize', 'ngFileUpload', '720kb.tooltips', '720kb.datepicker', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ng-weekday-selector', 'multipleDatePicker', 'daterangepicker', "ngCookies", "base64", "ngFileUpload", "blockUI", "chart.js", "timer"]);

MRApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, toastrConfig, blockUIConfig, $sceProvider) {

    $sceProvider.enabled(false);
    //==================================AUTHENTICATION & AUTHORIZATION INTERCEPTOR (Start)======================================

 
    //==================================AUTHENTICATION & AUTHORIZATION INTERCEPTOR (End)======================================

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

    blockUIConfig.message = 'Loading ...';

    $urlRouterProvider.otherwise('/logIn');
    $stateProvider

        //-------------------------------------------------------------LOGIN-----------------------------------------------------
        .state('logIn', {
            url: '/logIn',
            templateUrl: 'app/logIn/logIn.html',
            controller: 'logInController'
        })

        //-------------------------------------------------------------HOME-----------------------------------------------------
       .state('home', {
           url: '/home',
           templateUrl: 'app/home/home.html',
           controller: 'homeController'
        
         
       })

        //-------------------------------------------------------------PROFILE-----------------------------------------------------
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/profile/profile.html',
            controller: 'profileController',
         
        })

      //---------------------------------------------------------------Quazi-----------------------------------------------------
        .state('quazi', {
            url: '/quazi',
            templateUrl: 'app/quazi/quazi.html',
            controller:'quaziController'
           
           
        })
        //---------------------------------------------------------------Marriage List-----------------------------------------------------
        .state('marriagelist', {
            url: '/marriagelist',
            templateUrl: 'app/marriagelist/marriagelist.html',


        })

    
        //-------------------------------------------------------------Divorce List-----------------------------------------------------
        .state('divorcelist', {
            url: '/divorcelist',
            templateUrl: 'app/divorcelist/divorcelist.html',
        })

      

      

        //-------------------------------------------------------------REGISTERED CLIENT-----------------------------------------------------
        .state('registeredclient', {
            url: '/registeredclient',
            templateUrl: 'app/registeredclient/registeredclient.html',
           
        })


          //---------------------------------------------------------------SET UP EMAIl-----------------------------------------------------
        .state('setting', {
            url: '/setting',
            templateUrl: 'app/setting/setting.html',
         
          
        })



   
    
});