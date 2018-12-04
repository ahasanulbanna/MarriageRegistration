var CCDApp = angular.module("CCDApp", ['ui.router', 'ngMessages', 'datatables', 'toastr', 'ngSanitize', 'ngFileUpload', '720kb.tooltips', '720kb.datepicker', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ng-weekday-selector', 'multipleDatePicker', 'daterangepicker', "ngCookies", "base64", "ngFileUpload", "blockUI", "chart.js", "timer"]);

CCDApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, toastrConfig, blockUIConfig, $sceProvider) {

    $sceProvider.enabled(false);
    //==================================AUTHENTICATION & AUTHORIZATION INTERCEPTOR (Start)======================================

    $httpProvider.interceptors.push(function ($q, $cookies, $rootScope, $injector, $window) {
        return {
            'request': function (config) {
                var admintoken;
                var admintokenFromCookies = $cookies.get('AdminToken');
                if (admintokenFromCookies) {
                    admintoken = JSON.parse(admintokenFromCookies);
                } else {
                    admintoken = null;
                }
                config.headers['Token'] = admintoken;
                return config;
            },
            'requestError': function (config) {
                return config;
            },
            'responseError': function (config) {

                function goToLoginPageAndClearLocalStorage() {
                    $window.location.href = "/Admin/#/logIn";
                    $cookies.remove('AdminToken', { path: '/' });
                    $cookies.remove('AdminName', { path: '/' });
                }
                $rootScope.UsernameOrPasswordNotMatched = false;
                var toastr = $injector.get('toastr');
                var $state = $injector.get('$state');

                //If token value expires or wrong token provided:
                if (config.status === 401) {
                    goToLoginPageAndClearLocalStorage();
                    $rootScope.UnauthorizedRequestFound = true;
                }
                else if (config.status === 500) {
                    //goToLoginPageAndClearLocalStorage();
                    toastr.error("Internal Server Error! Please try again !", {
                        timeOut: 3000
                    });
                    $rootScope.InternalServerErrorFound = true;
                }

                else if (config.status === 403) {
                    $state.reload();
                    $rootScope.UsernameOrPasswordNotMatched = true;
                }
                return config;
            }
        };
    });
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

    blockUIConfig.message = 'Please Wait ...';

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
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

      //---------------------------------------------------------------Quazi-----------------------------------------------------
        .state('quazi', {
            url: '/quazi',
            templateUrl: 'app/quazi/quazi.html',
           
           
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

        //-------------------------------------------------------------COIN SCHEMA-----------------------------------------------------
        .state('coinschema', {
            url: '/coinschema',
            templateUrl: 'app/coinschema/coinschema.html',
            controller: 'coinschemaController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------LOAN REQUEST-----------------------------------------------------
        .state('loanrequest', {
            url: '/loanrequest',
            templateUrl: 'app/loanrequest/loanrequest.html',
            controller: 'loanrequestController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------REGISTERED CLIENT-----------------------------------------------------
        .state('registeredclient', {
            url: '/registeredclient',
            templateUrl: 'app/registeredclient/registeredclient.html',
            controller: 'registeredclientController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------TRANSECTION-----------------------------------------------------
        .state('transection', {
            url: '/transection',
            templateUrl: 'app/transection/transection.html',
            controller: 'transectionController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------COIN RATE-----------------------------------------------------
        .state('coinrate', {
            url: '/coinrate',
            templateUrl: 'app/coinrate/coinrate.html',
            controller: 'coinrateController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        ////-------------------------------------------------------------ACCEPTED COIN-----------------------------------------------------
        //.state('acceptedcoin', {
        //    url: '/acceptedcoin',
        //    templateUrl: 'app/acceptedcoin/acceptedcoin.html',
        //    controller: 'acceptedcoinController',
        //    resolve: {
        //        isAdminAuthenticated: checkAuthentication
        //    }
        //})

        //------------------------------------------------------------WITHDRAW REQUEST-----------------------------------------------------
        //.state('withdrawrequest', {
        //    url: '/withdrawrequest',
        //    templateUrl: 'app/withdrawrequest/withdrawrequest.html',
        //    controller: 'withdrawrequestController',
        //    resolve: {
        //        isAdminAuthenticated: checkAuthentication
        //    }
        //})

        //------------------------------------------------------------SET UP AIRDROP COIN CLAIM-----------------------------------------------------
        .state('setupairdropcoinclaim', {
            url: '/setupairdropcoinclaim',
            templateUrl: 'app/setupairdropcoinclaim/setupairdropcoinclaim.html',
            controller: 'setupairdropcoinclaimController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })
        //------------------------------------------------------------AIRDROP COIN CLAIM RESULT-----------------------------------------------------
        .state('airdropcoinclaimresult', {
            url: '/airdropcoinclaimresult',
            templateUrl: 'app/airdropcoinclaimresult/airdropcoinclaimresult.html',
            controller: 'airdropcoinclaimresultController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })
        //------------------------------------------------------------SET UP YOUTUBE BOUNTY CLAIM-----------------------------------------------------
        .state('setupyoutubebountyclaim', {
            url: '/setupyoutubebountyclaim',
            templateUrl: 'app/setupyoutubebountyclaim/setupyoutubebountyclaim.html',
            controller: 'setupyoutubebountyclaimController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })
        //------------------------------------------------------------YOUTUBE BOUNTY CLAIM RESULT-----------------------------------------------------
        .state('youtubebountyclaimresult', {
            url: '/youtubebountyclaimresult',
            templateUrl: 'app/youtubebountyclaimresult/youtubebountyclaimresult.html',
            controller: 'youtubebountyclaimresultController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

          //---------------------------------------------------------------SET UP EMAIl-----------------------------------------------------
        .state('setting', {
            url: '/setting',
            templateUrl: 'app/setting/setting.html',
            controller: 'settingController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })



    //==================================================Miscelenous Function (app.config)==================================================

    function checkAuthentication($q, customService, $state, $timeout, $window, toastr, $rootScope, $cookies) {
        if (customService.isLoggedIn()) {
            // Resolve the promise successfully
            return $q.when();
        }
        else {
            $timeout(function () {
                //This code runs after the authentication promise has been rejected.
                //Reason of using $timeout below: Let's assume, unauthenticated user is in state A. They click a link to go to protected state 
                //B but you want to redirect them to logInPage. If there's no $timeout, ui-router will simply halt all state transitions, 
                //so the user would be stuck in state A. The $timeout allows ui-router to first prevent the initial transition to protected state 
                //B because the resolve was rejected and after that's done, it redirects to logInPage
                if (true) {
                    toastr.error("You seem to be unauthorized, Please login !", {
                        timeOut: 2000
                    });
                    $window.location.href = "/Admin/#/logIn";
                    $cookies.remove('AdminToken', { path: '/' });
                    $cookies.remove('AdminName', { path: '/' });
                    $cookies.remove('AdminId', { path: '/' });
                } else {
                    toastr.error("You seem to be unauthorized, Please login !", {
                        timeOut: 2000
                    });
                    $window.location.href = "/Admin/#/logIn";
                }


            });
            // Reject the authentication promise to prevent the state from loading
            return $q.reject();
        }
    }

});

CCDApp.run(function ($rootScope, $http, $q, $state, toastr, $timeout, appServices, $cookies, $window, customService) {
    //===============================================On $stateChangeStart Event==========================================
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        //-------------------Prevent a logged in user to go to login state----------------------
        var userIsLoggedIn = customService.isLoggedIn();
        var unKnownState = "^";
        if (fromState.url === unKnownState && toState.url === "/logIn" && userIsLoggedIn) {
            $window.location.href = "/Admin/#/home";

        }
            //If user is logged-in and wants to go to logIn page again, To restrict him:
        else if (toState.url === "/logIn" && userIsLoggedIn) {
            event.preventDefault();
            toastr.error("You are already logged in, hence you can not go to login page !", {
                timeOut: 3000
            });
            $window.location.href = "/Admin/#" + fromState.url;
        }

        //--------------------Get Essential values from cookie and store then into $rootScope-------------------
        $rootScope.AdminName = '';
        var adminnameFromCookies = $cookies.get('AdminName');
        if (adminnameFromCookies) {
            $rootScope.AdminName = JSON.parse(adminnameFromCookies);
        } else {
            $rootScope.AdminName = '';
        }

        $rootScope.AdminFullName = '';
        var adminfullnameFromCookies = $cookies.get('AdminFullName');
        if (adminfullnameFromCookies) {
            $rootScope.AdminFullName = JSON.parse(adminfullnameFromCookies);
        } else {
            $rootScope.AdminFullName = '';
        }

        $rootScope.AdminId = '';
        var adminidFromCookies = $cookies.get('AdminId');
        if (adminidFromCookies) {
            $rootScope.AdminId = JSON.parse(adminidFromCookies);
        } else {
            $rootScope.AdminId = '';
        }

    });


    //=============================================On $stateChangeSuccess Event==========================================
    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        $rootScope.LiveAPIEnabled = false;
        $rootScope.HTMLCollapseStatus = $cookies.get('HTMLCollapseStatus');
        if ($rootScope.HTMLCollapseStatus == null || $rootScope.HTMLCollapseStatus == undefined) {
            $rootScope.HTMLCollapseStatus = "fixed left-sidebar-top";
        }
    });

    //==================================================Miscelenous Function (app.run)==================================================

});





