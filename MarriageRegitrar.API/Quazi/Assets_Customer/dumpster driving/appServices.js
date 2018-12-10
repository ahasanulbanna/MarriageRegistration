///// <reference path="Assets_Company/angularjs/angular.js" />
///// <reference path="app.js" />
//thirdEyeApp.factory("appServices", ["$http", "$rootScope", "$window", "$scope", function ($http, $rootScope, $window, $scope) {
//    //$scope.CompanyProfileDetails = {};
//    //$scope.CompanyCurrentPriviliges = {};
//    //$scope.AuthToEmployee = false;
//    //$scope.AuthToCurrentLocation = false;
//    //$scope.AuthToTrackEmployee = false;
//    //$scope.AuthToAddPayment = false;
//    //$scope.AuthToPendingPayment = false;
//    //$scope.AuthToApprovedPayment = false;
//    //$scope.AuthToPackage = true;

//    //$scope.CompanyCurrentPriviliges = function () {
//    //    return $http({
//    //        url: "/api/CompanyPackage/GetCompanyPckgPrivilegeByCompanyId/1",
//    //        method: "GET",
//    //        headers: {
//    //            "content-type": "application/json",
//    //            "cache-control": "no-cache"
//    //        },
//    //        async: false
//    //    });
//    //};

//    //$scope.CompanyCurrentPriviliges = function () {
//    //    return $http({
//    //        url: "/api/CompanyPackage/GetCompanyPckgPrivilegeByCompanyId/1",
//    //        method: "GET",
//    //        headers: {
//    //            "content-type": "application/json",
//    //            "cache-control": "no-cache"
//    //        },
//    //        async: false
//    //    });
//    //}

//    //$scope.CompanyProfileDetails = function () {
//    //    return $http({
//    //        url: "/Api/CP_Profile/GetCompanyProfileDetails/" + 1,
//    //        method: "GET",
//    //        headers: {
//    //            "content-type": "application/json",
//    //            "cache-control": "no-cache"
//    //        },
//    //        async: false
//    //    });
//    //}

//    //$scope.CP_EmployeeList = function () {
//    //    return $http({
//    //        url: "/Api/CP_Employee/GetCP_EmployeeList",
//    //        method: "GET",
//    //        headers: {
//    //            "content-type": "application/json",
//    //            "cache-control": "no-cache"
//    //        },
//    //        async: true
//    //    });
//    //};



//    //$scope.ValidateAuthorization = function () {
//    //    if ($scope.CompanyProfileDetails.CompanyName != null && $scope.CompanyProfileDetails.CompanyEmail != null && $scope.CompanyProfileDetails.CompanyAddress != null && $scope.CompanyProfileDetails.CompanyBillingAddress != null && $scope.CompanyProfileDetails.ContactPerson != null && $scope.CompanyProfileDetails.ContactPersonEmail != null && ($scope.CompanyProfileDetails.CompanyPhone != null || $scope.CompanyProfileDetails.CompanyMobile != null) && ($scope.CompanyProfileDetails.ContactPersonPhone != null || $scope.CompanyProfileDetails.ContactPersonMobile != null)) {
//    //        if ($scope.CompanyCurrentPriviliges.Previleges != null) {
//    //            $scope.AuthToEmployee = true;
//    //        }
//    //    }

//    //    if ($scope.CompanyProfileDetails.CompanyName != null && $scope.CompanyProfileDetails.CompanyEmail != null && $scope.CompanyProfileDetails.CompanyAddress != null && $scope.CompanyProfileDetails.CompanyBillingAddress != null && $scope.CompanyProfileDetails.ContactPerson != null && $scope.CompanyProfileDetails.ContactPersonEmail != null && ($scope.CompanyProfileDetails.CompanyPhone != null || $scope.CompanyProfileDetails.CompanyMobile != null) && ($scope.CompanyProfileDetails.ContactPersonPhone != null || $scope.CompanyProfileDetails.ContactPersonMobile != null)) {
//    //        if ($scope.CompanyCurrentPriviliges.Previleges != null) {
//    //            $scope.AuthToEmployee = true;
//    //            if ($scope.CP_EmployeeList != null) {
//    //                $scope.AuthToTrackEmployee = true;
//    //                $scope.AuthToCurrentLocation = true;
//    //            }
//    //        }
//    //    }

//    //    if ($scope.CompanyProfileDetails.CompanyName != null && $scope.CompanyProfileDetails.CompanyEmail != null && $scope.CompanyProfileDetails.CompanyAddress != null && $scope.CompanyProfileDetails.CompanyBillingAddress != null && $scope.CompanyProfileDetails.ContactPerson != null && $scope.CompanyProfileDetails.ContactPersonEmail != null && ($scope.CompanyProfileDetails.CompanyPhone != null || $scope.CompanyProfileDetails.CompanyMobile != null) && ($scope.CompanyProfileDetails.ContactPersonPhone != null || $scope.CompanyProfileDetails.ContactPersonMobile != null)) {
//    //        if (($scope.CompanyCurrentPriviliges.Previleges != null && $scope.CompanyCurrentPriviliges.Previleges.PckgType == 'Chargeable') || $scope.CompanyCurrentPriviliges.ChargeablePckgEnjoyed == true) {
//    //            $scope.AuthToAddPayment = true;
//    //            $scope.AuthToPendingPayment = true;
//    //            $scope.AuthToApprovedPayment = true;
//    //        }
//    //    }

//    //    console.log("$scope.AuthToEmployee");
//    //    console.log($scope.AuthToEmployee);
//    //    console.log("$scope.AuthToCurrentLocation");
//    //    console.log($scope.AuthToCurrentLocation);
//    //    console.log("$scope.AuthToTrackEmployee");
//    //    console.log($scope.AuthToTrackEmployee);
//    //    console.log("$scope.AuthToAddPayment");
//    //    console.log($scope.AuthToAddPayment);
//    //    console.log("$scope.AuthToPendingPayment");
//    //    console.log($scope.AuthToPendingPayment);
//    //    console.log("$scope.AuthToApprovedPayment");
//    //    console.log($scope.AuthToApprovedPayment);
//    //};


//    return {
//        AuthToEmployee: function () {
//            //if ($scope.CompanyProfileDetails.CompanyName != null && $scope.CompanyProfileDetails.CompanyEmail != null && $scope.CompanyProfileDetails.CompanyAddress != null && $scope.CompanyProfileDetails.CompanyBillingAddress != null && $scope.CompanyProfileDetails.ContactPerson != null && $scope.CompanyProfileDetails.ContactPersonEmail != null && ($scope.CompanyProfileDetails.CompanyPhone != null || $scope.CompanyProfileDetails.CompanyMobile != null) && ($scope.CompanyProfileDetails.ContactPersonPhone != null || $scope.CompanyProfileDetails.ContactPersonMobile != null)) {
//            //    if ($scope.CompanyCurrentPriviliges.Previleges != null) {
//            //        return true;
//            //    }
//            //}

//            return true;
//        },
//        //AuthToTrackEmployee: function () {
//        //    if ($scope.CompanyCurrentPriviliges.Previleges != null) {
//        //        //$scope.AuthToEmployee = true;
//        //        if ($scope.CP_EmployeeList != null) {
//        //            return true;
//        //        }
//        //    }
//        //},
//        //AuthToCurrentLocation: function () {
//        //    if ($scope.CompanyCurrentPriviliges.Previleges != null) {
//        //        //$scope.AuthToEmployee = true;
//        //        if ($scope.CP_EmployeeList != null) {
//        //            return true;
//        //        }
//        //    }
//        //},
//        //AuthToAddPayment: function () {
//        //    if (($scope.CompanyCurrentPriviliges.Previleges != null && $scope.CompanyCurrentPriviliges.Previleges.PckgType == 'Chargeable') || $scope.CompanyCurrentPriviliges.ChargeablePckgEnjoyed == true) {
//        //        return true;
//        //    }
//        //},
//        //AuthToPendingPayment: function () {
//        //    if (($scope.CompanyCurrentPriviliges.Previleges != null && $scope.CompanyCurrentPriviliges.Previleges.PckgType == 'Chargeable') || $scope.CompanyCurrentPriviliges.ChargeablePckgEnjoyed == true) {
//        //        return true;
//        //    }
//        //},
//        //AuthToApprovedPayment: function () {
//        //    if (($scope.CompanyCurrentPriviliges.Previleges != null && $scope.CompanyCurrentPriviliges.Previleges.PckgType == 'Chargeable') || $scope.CompanyCurrentPriviliges.ChargeablePckgEnjoyed == true) {
//        //        return true;
//        //    }
//        //},




//    };



//}]);



//thirdEyeApp.factory("appServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
//    return {
//        isLoggedIn: function () {
//            return false;
//        },
//        CheckTokenExpirationValidity: function () {
//            var param = JSON.parse(localStorage.getItem("Token"));
//            return $http({
//                url: "/Api/ApiMenu/CheckTokenExpirationValidity/" + param,
//                method: "GET",
//                headers: {
//                    "Token": angular.fromJson($rootScope.Token),
//                    "content-type": "application/json",
//                    "cache-control": "no-cache"
//                },
//                async: false
//            });
//        },
//        hasVirtualDriverPrevileges: function () {
//            if ($rootScope.IsVirtualDriver == 'Yes') {
//                return true;
//            } else {
//                return false;
//            }
//        }
//    }

//}]);





thirdEyeApp.factory("appServices", ["$http", "$rootScope", function ($http, $rootScope) {
    return {
        //GetCompanyPckgPrivilegeByCompanyId: function () {
        //    var CompanyCurrentPriviliges = {};
        //    $http.get("/api/CompanyPackage/GetCompanyPckgPrivilegeByCompanyId/1").then(function (response) {
        //        CompanyCurrentPriviliges = response.data;
        //        console.log(CompanyCurrentPriviliges);
        //    })
        //    .then(function () {
        //        if (CompanyCurrentPriviliges.Previleges == null) {
        //            return false;
        //        }
        //        else {
        //            return true;
        //        }

        //    });


        //},
        //GetCompanyProfileDetails: function () {
        //    var CompanyProfileDetails = {};
        //    $http.get("/Api/CP_Profile/GetCompanyProfileDetails/1").then(function (response) {
        //        CompanyProfileDetails = response.data;
        //        console.log(CompanyProfileDetails);
        //    })
        //    .then(function () {
        //        if (CompanyProfileDetails.CompanyName != null && CompanyProfileDetails.CompanyEmail != null && CompanyProfileDetails.CompanyAddress != null && CompanyProfileDetails.CompanyBillingAddress != null && CompanyProfileDetails.ContactPerson != null && CompanyProfileDetails.ContactPersonEmail != null && (CompanyProfileDetails.CompanyPhone != null || CompanyProfileDetails.CompanyMobile != null) && (CompanyProfileDetails.ContactPersonPhone != null || CompanyProfileDetails.ContactPersonMobile != null)) {
        //            return true;

        //        }
        //        else {
        //            return false;
        //        }

        //    });

        //},

            GetCompanyCurrentPriviliges : function () {
                return $http({
                    url: "/api/CompanyPackage/GetCompanyPckgPrivilegeByCompanyId/1",
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "cache-control": "no-cache"
                    },
                    async: false
                });
            },

            GetCompanyProfileDetails: function () {
                return $http({
                    url: "/Api/CP_Profile/GetCompanyProfileDetails/" + 1,
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "cache-control": "no-cache"
                    },
                    async: false
                });
            },

            GetCP_EmployeeList : function () {
                return $http({
                    url: "/Api/CP_Employee/GetCP_EmployeeList",
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "cache-control": "no-cache"
                    },
                    async: true
                });
            },

        IsAuthToEmployee: function () {
            if ($rootScope.CompanyProfileDetails.CompanyName != null && $rootScope.CompanyProfileDetails.CompanyEmail != null && $rootScope.CompanyProfileDetails.CompanyAddress != null && $rootScope.CompanyProfileDetails.CompanyBillingAddress != null && $rootScope.CompanyProfileDetails.ContactPerson != null && $rootScope.CompanyProfileDetails.ContactPersonEmail != null && ($rootScope.CompanyProfileDetails.CompanyPhone != null || $rootScope.CompanyProfileDetails.CompanyMobile != null) && ($rootScope.CompanyProfileDetails.ContactPersonPhone != null || $rootScope.CompanyProfileDetails.ContactPersonMobile != null)) {
                if ($rootScope.CompanyCurrentPriviliges.IsReport == "NoCurrentPackage") {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        },

        IsAuthToTracking: function () {
            if ($rootScope.CompanyProfileDetails.CompanyName != null && $rootScope.CompanyProfileDetails.CompanyEmail != null && $rootScope.CompanyProfileDetails.CompanyAddress != null && $rootScope.CompanyProfileDetails.CompanyBillingAddress != null && $rootScope.CompanyProfileDetails.ContactPerson != null && $rootScope.CompanyProfileDetails.ContactPersonEmail != null && ($rootScope.CompanyProfileDetails.CompanyPhone != null || $rootScope.CompanyProfileDetails.CompanyMobile != null) && ($rootScope.CompanyProfileDetails.ContactPersonPhone != null || $rootScope.CompanyProfileDetails.ContactPersonMobile != null)) {
                if ($rootScope.CompanyCurrentPriviliges.IsReport != "NoCurrentPackage") {
                    console.log($rootScope.EmployeeList);
                    if ($rootScope.EmployeeList.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },

        IsAuthToPayment: function () {
            if ($rootScope.CompanyProfileDetails.CompanyName != null && $rootScope.CompanyProfileDetails.CompanyEmail != null && $rootScope.CompanyProfileDetails.CompanyAddress != null && $rootScope.CompanyProfileDetails.CompanyBillingAddress != null && $rootScope.CompanyProfileDetails.ContactPerson != null && $rootScope.CompanyProfileDetails.ContactPersonEmail != null && ($rootScope.CompanyProfileDetails.CompanyPhone != null || $rootScope.CompanyProfileDetails.CompanyMobile != null) && ($rootScope.CompanyProfileDetails.ContactPersonPhone != null || $rootScope.CompanyProfileDetails.ContactPersonMobile != null)) {
                if ($rootScope.CompanyCurrentPriviliges.IsReport != "NoCurrentPackage") {
                    if ($rootScope.AnyChargeablePackage == "Chargeable") {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },

        IsAuthToPackage: function () {
            var toRet = false;
            if ($rootScope.CompanyProfileDetails.CompanyName != null && $rootScope.CompanyProfileDetails.CompanyEmail != null && $rootScope.CompanyProfileDetails.CompanyAddress != null && $rootScope.CompanyProfileDetails.CompanyBillingAddress != null && $rootScope.CompanyProfileDetails.ContactPerson != null && $rootScope.CompanyProfileDetails.ContactPersonEmail != null) {
                if ($rootScope.CompanyProfileDetails.CompanyPhone != null && $rootScope.CompanyProfileDetails.CompanyMobile != null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.CompanyPhone != null && $rootScope.CompanyProfileDetails.CompanyMobile == null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.CompanyPhone == null && $rootScope.CompanyProfileDetails.CompanyMobile != null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.CompanyPhone == null && $rootScope.CompanyProfileDetails.CompanyMobile == null) {
                    toRet = false;
                    $rootScope.AuthToPackagePointer = false;
                }

                if ($rootScope.CompanyProfileDetails.ContactPersonPhone != null && $rootScope.CompanyProfileDetails.ContactPersonMobile != null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.ContactPersonPhone != null && $rootScope.CompanyProfileDetails.ContactPersonMobile == null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.ContactPersonPhone == null && $rootScope.CompanyProfileDetails.ContactPersonMobile != null) {
                    toRet = true;
                    $rootScope.AuthToPackagePointer = true;
                }
                else if ($rootScope.CompanyProfileDetails.ContactPersonPhone == null && $rootScope.CompanyProfileDetails.ContactPersonMobile == null) {
                    toRet = false;
                    $rootScope.AuthToPackagePointer = false;
                }
                
            }
            else {
                $rootScope.AuthToPackagePointer = false;
                toRet = false;
            }

            return toRet;
        },
    }

}]);