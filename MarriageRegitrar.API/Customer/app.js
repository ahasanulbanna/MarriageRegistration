var CCDApp = angular.module("CCDApp", ['ui.router', 'ngMessages', 'datatables', 'toastr', 'ngSanitize', 'ngFileUpload', '720kb.tooltips', '720kb.datepicker', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ng-weekday-selector', 'multipleDatePicker', 'daterangepicker', "ngCookies", "base64", "ngFileUpload", "blockUI", "chart.js", "timer"]);

CCDApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, toastrConfig, blockUIConfig, $sceProvider) {

    $sceProvider.enabled(false);
    //==================================AUTHENTICATION & AUTHORIZATION INTERCEPTOR (Start)======================================

    $httpProvider.interceptors.push(function ($q, $cookies, $rootScope, $injector, $window) {
        return {
            'request': function (config) {
                var customertoken;
                var customertokenFromCookies = $cookies.get('CustomerToken');
                if (customertokenFromCookies) {
                    customertoken = JSON.parse(customertokenFromCookies);
                } else {
                    customertoken = null;
                }
                config.headers['Token'] = customertoken;
                return config;
            },
            'requestError': function (config) {
                return config;
            },
            'responseError': function (config) {

                function goToLoginPageAndClearLocalStorage() {
                    $window.location.href = "/Customer/#/logIn";
                    $cookies.remove('CustomerToken', { path: '/' });
                    $cookies.remove('CustomerName', { path: '/' });
                }
                function goToActivationPageAndClearLocalStorage() {
                    $window.location.href = "/Customer/#/activateaccount";
                    $cookies.remove('CustomerToken', { path: '/' });
                    $cookies.remove('CustomerName', { path: '/' });
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
                    toastr.error("Internal Server Error! Please try again !", { autoDismiss: false, timeOut: 600000, closeButton: true });
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
            controller: 'logInController',
        })

        //-------------------------------------------------------------ACTIVATE ACCOUNT-----------------------------------------------------
        .state('activateaccount', {
            url: '/activateaccount',
            templateUrl: 'app/activateaccount/activateaccount.html',
            controller: 'activateaccountController',
        })

        //-------------------------------------------------------------RESET PASSWORD-----------------------------------------------------
        .state('resetpassword', {
            url: '/resetpassword',
            templateUrl: 'app/resetpassword/resetpassword.html',
            controller: 'resetpasswordController',
        })

        //-------------------------------------------------------------REGISTER-----------------------------------------------------
        .state('register', {
            url: '/register',
            templateUrl: 'app/register/register.html',
            controller: 'registerController'
        })

        //-------------------------------------------------------------HOME-----------------------------------------------------
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
          
        })

        //-------------------------------------------------------------Investigation-----------------------------------------------------
        .state('investigation', {
            url: '/investigation',
            templateUrl: 'app/investigation/investigation.html',
           

        })
        //-------------------------------------------------------------Registrar Marriage-----------------------------------------------------
        .state('registrarmarriage', {
            url: '/registrarmarriage',
            templateUrl: 'app/registrarmarriage/registrarmarriage.html',


        })

        //-------------------------------------------------------------Divorce-----------------------------------------------------
        .state('divorce', {
            url: '/divorce',
            templateUrl: 'app/divorce/divorce.html',


        })
    
        //-------------------------------------------------------------PROFILE-----------------------------------------------------
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/profile/profile.html',
            controller: 'profileController',
            resolve: {
                isCustomerAuthenticated: checkAuthentication
            }
        })

        ////-------------------------------------------------------------BUY/EXCHANGE-----------------------------------------------------
        //.state('buyexchange', {
        //    url: '/buyexchange',
        //    templateUrl: 'app/buyexchange/buyexchange.html',
        //    controller: 'buyexchangeController',
        //    resolve: {
        //        isCustomerAuthenticated: checkAuthentication
        //    }
        //})

        //-------------------------------------------------------------KYC-----------------------------------------------------
        .state('kyc', {
            url: '/kyc',
            templateUrl: 'app/kyc/kyc.html',
            controller: 'kycController',
            resolve: {
                isCustomerAuthenticated: checkAuthentication
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

        //-------------------------------------------------------------TRANSECTION-----------------------------------------------------
        .state('transection', {
            url: '/transection',
            templateUrl: 'app/transection/transection.html',
            controller: 'transectionController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------AIR-DROP COIN CLAIM-----------------------------------------------------
        .state('airdropcoinclaim', {
            url: '/airdropcoinclaim',
            templateUrl: 'app/airdropcoinclaim/airdropcoinclaim.html',
            controller: 'airdropcoinclaimController',
            resolve: {
                isCustomerAuthenticated: checkAuthentication
            }
        })
        //-------------------------------------------------------------YouTube BOUNTY CLAIM-----------------------------------------------------
        .state('youtubebountyclaim', {
            url: '/youtubebountyclaim',
            templateUrl: 'app/youtubebountyclaim/youtubebountyclaim.html',
            controller: 'youtubebountyclaimController',
            resolve: {
                isCustomerAuthenticated: checkAuthentication
            }
        })

        //-------------------------------------------------------------WALLET-----------------------------------------------------
        .state('wallet', {
            url: '/wallet',
            templateUrl: 'app/wallet/wallet.html',
            controller: 'walletController',
            resolve: {
                isCustomerAuthenticated: checkAuthentication
            }
        })
            //-------------------------------------------------------------BUY TOKENS-----------------------------------------------------
        .state('buytoken', {
            url: '/buytoken',
            templateUrl: 'app/buytoken/buytoken.html',
            controller: 'transectionController',
            resolve: {
                isAdminAuthenticated: checkAuthentication
            }
        })


        //-------------------------------------------------------------BUY TOKENS-----------------------------------------------------
        .state('withdraw', {
            url: '/withdraw',
            templateUrl: 'app/withdraw/withdraw.html',
            controller: 'withdrawController',
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
                    $window.location.href = "/Customer/#/logIn";
                    $cookies.remove('CustomerToken', { path: '/' });
                    $cookies.remove('CustomerName', { path: '/' });
                    $cookies.remove('CustomerId', { path: '/' });
                } else {
                    toastr.error("You seem to be unauthorized, Please login !", {
                        timeOut: 2000
                    });
                    $window.location.href = "/Customer/#/logIn";
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
        //Prevent a logged in user to go to login state
        var userIsLoggedIn = customService.isLoggedIn();
        var unKnownState = "^";
        if (fromState.url === unKnownState && toState.url === "/logIn" && userIsLoggedIn) {
            $window.location.href = "/Customer/#/home";

        }
            //If user is logged-in and wants to go to logIn page again, To restrict him:
        else if (toState.url === "/logIn" && userIsLoggedIn) {
            event.preventDefault();
            toastr.error("You are already logged in, hence you can not go to login page !", {
                timeOut: 3000
            });
            $window.location.href = "/Customer/#" + fromState.url;
        }

        //Get Essential values from cookie and store then into $rootScope
        $rootScope.CustomerName = '';
        var customernameFromCookies = $cookies.get('CustomerName');
        if (customernameFromCookies) {
            $rootScope.CustomerName = JSON.parse(customernameFromCookies);
        } else {
            $rootScope.CustomerName = '';
        }

        $rootScope.CustomerId = '';
        var customeridFromCookies = $cookies.get('CustomerId');
        if (customeridFromCookies) {
            $rootScope.CustomerId = JSON.parse(customeridFromCookies);
        } else {
            $rootScope.CustomerId = '';
        }

    });


    //========On $stateChangeSuccess Event========
    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        $rootScope.LiveAPIEnabled = false;
        $rootScope.HTMLCollapseStatus = $cookies.get('HTMLCollapseStatus');
        if ($rootScope.HTMLCollapseStatus == null || $rootScope.HTMLCollapseStatus == undefined) {
            $rootScope.HTMLCollapseStatus = "fixed left-sidebar-top";
        }
    });
});





