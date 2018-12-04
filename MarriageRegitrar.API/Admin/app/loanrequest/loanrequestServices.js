CCDApp.factory("loanrequestServices", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
    return {
        GetAllLoanRequestList: function () {
            return $http({
                url: "/Api/LoanRequest/GetAllLoanRequestList",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        },
        CreateRequestForLoan: function (loanRequest) {
            return $http({
                url: "/Api/LoanRequest/CreateRequestForLoan",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: loanRequest,
                method: "POST",
                async: false
            });
        },

        ApproveLoanRequestByLoanRequestId: function (loanRequestId, loanStatusUpdatedBy) {
            return $http({
                url: "/Api/LoanRequest/ApproveLoanRequestByLoanRequestId/" + loanRequestId + "/" + loanStatusUpdatedBy,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "POST",
                async: false
            });
        },

        RejectLoanRequestByLoanRequestId: function (rejectLoanRequest) {
            return $http({
                url: "/Api/LoanRequest/RejectLoanRequestByLoanRequestId",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                data: rejectLoanRequest,
                method: "POST",
                async: false
            });
        },

        GetLoanRequestDetailsByLoanRequestId: function (loanRequestId) {
            return $http({
                url: "/Api/LoanRequest/GetLoanRequestDetailsByLoanRequestId/" + loanRequestId,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                method: "GET",
                async: false
            });
        }
    };
}]);