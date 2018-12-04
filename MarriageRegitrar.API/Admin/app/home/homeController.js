/// <reference path="app.js" />
CCDApp.controller('homeController', function ($scope, homeServices, $rootScope, appServices, $cookies, blockUI, $window, $q, toastr, $compile, $timeout, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $state) {

    var pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,dogecoin,ripple,bitcoin-cash,stellar,eos,tether,cardano,tron')
    //const pricesWs = new WebSocket('wss://ws.coincap.io/trades/binance')
    $rootScope.LiveAPIEnabled = true;
    AutoStartLiveAPI();



    homeServices.GetNumberOfRegisteredClients().then(function (response) {
        $scope.TotalCustomer = response.data.Total;
        $scope.OnlineCustomer = response.data.Online;
        $scope.OfflineCustomer = response.data.Offline;
    });

    homeServices.GetCountTotalTokenSold().then(function (response) {
        $scope.CountTotalTokenSold = response.data;
    });
    homeServices.GetCountOfTotalTransection().then(function (response) {
        $scope.TotalTransection = response.data.Total;
        $scope.ProcessingTransection = response.data.Processing;
        $scope.ApprovedTransection = response.data.Approved;
        $scope.RejectedTransection = response.data.Rejected;
        $scope.RejectedForeverTransection = response.data.RejectedForever;
    });
    homeServices.GetCountOfTotalLoanRequest().then(function (response) {
        $scope.TotalLoanRequest = response.data.Total;
        $scope.ProcessingLoanRequest = response.data.Processing;
        $scope.ApprovedLoanRequest = response.data.Approved;
        $scope.RejectedLoanRequest = response.data.Rejected;
    });
    homeServices.GetCurrentTimeTableEndIn().then(function (response) {
        $scope.CurrentTimeTableEndDate = (new Date(response.data.EndsIn)).getTime();
        $scope.CurrentTimeTableName = response.data.OfferName;
    });
    homeServices.GetCountOfTotalAirDropFreeCoinSubmission().then(function (response) {
        $scope.CountOfTotalAirDropFreeCoinSubmission = response.data;
    });
    homeServices.GetCountOfTotalYouTubeBountySubmission().then(function (response) {
        $scope.CountOfTotalYouTubeBountySubmission = response.data;
    });
    homeServices.GetBarChartDataOfTransection().then(function (response) {
        $scope.BarChartDataOfTransectionDates = response.data.Dates;
        $scope.BarChartDataOfTransectionData = response.data.Data;
    });
    homeServices.GetPieChartDataCustomerJoinedPerTimeTable().then(function (response) {
        $scope.CustomerJoinedPerTimeTableLabels = response.data.Labels;
        $scope.CustomerJoinedPerTimeTableData = response.data.Data;
    });
    homeServices.GetPieChartDataTransectionAsPerTimeTable().then(function (response) {
        $scope.TransectionAsPerTimeTableLabels = response.data.Labels;
        $scope.TransectionAsPerTimeTableData = response.data.Data;
    });
    homeServices.GetLineChartDataOfCoinRate().then(function (response) {
        $scope.LineChartDataOfCoinRateLabels = response.data.Labels;
        $scope.LineChartDataOfCoinRateData = response.data.Data;
        $scope.LineChartDataOfCoinRatedatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.LineChartDataOfCoinRateoptions = {
            scales: {
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                  },
                  {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: true,
                      position: 'right'
                  }
                ]
            }
        };
    });

    $scope.ControlLiveAPI = function () {
        if ($rootScope.LiveAPIEnabled == true) {

            pricesWs.close();
            $rootScope.LiveAPIEnabled = false;
        }
        else if ($rootScope.LiveAPIEnabled == false) {
            pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,dogecoin,ripple,bitcoin-cash,stellar,eos,tether,cardano,tron')
            $rootScope.LiveAPIEnabled = true;
            AutoStartLiveAPI();
        }
    }

    function AutoStartLiveAPI() {
        if ($rootScope.LiveAPIEnabled == true) {
            pricesWs.onmessage = function (msg) {
                //document.getElementById('trade').innerHTML = msg.data;
                var json = JSON.parse(msg.data);

                if (json.bitcoin != undefined) {
                    $scope.bitcoin = json.bitcoin;
                    $('#bitcoin').removeClass('tr-style-static');
                    $('#bitcoin').addClass('tr-style-blink');
                }
                else {
                    $('#bitcoin').removeClass('tr-style-blink');
                    $('#bitcoin').addClass('tr-style-static');
                }
                if (json.ethereum != undefined) {
                    $scope.ethereum = json.ethereum;
                    $('#ethereum').removeClass('tr-style-static');
                    $('#ethereum').addClass('tr-style-blink');
                }
                else {
                    $('#ethereum').removeClass('tr-style-blink');
                    $('#ethereum').addClass('tr-style-static');
                }
                if (json.dogecoin != undefined) {
                    $scope.dogecoin = json.dogecoin;
                    $('#dogecoin').removeClass('tr-style-static');
                    $('#dogecoin').addClass('tr-style-blink');
                }
                else {
                    $('#dogecoin').removeClass('tr-style-blink');
                    $('#dogecoin').addClass('tr-style-static');
                }
                if (json.monero != undefined) {
                    $scope.monero = json.monero;
                    $('#monero').removeClass('tr-style-static');
                    $('#monero').addClass('tr-style-blink');
                }
                else {
                    $('#monero').removeClass('tr-style-blink');
                    $('#monero').addClass('tr-style-static');
                }
                if (json.litecoin != undefined) {
                    $scope.litecoin = json.litecoin;
                    $('#litecoin').removeClass('tr-style-static');
                    $('#litecoin').addClass('tr-style-blink');
                }
                else {
                    $('#litecoin').removeClass('tr-style-blink');
                    $('#litecoin').addClass('tr-style-static');
                }
                if (json.ripple != undefined) {
                    $scope.ripple = json.ripple;
                    $('#ripple').removeClass('tr-style-static');
                    $('#ripple').addClass('tr-style-blink');
                }
                else {
                    $('#ripple').removeClass('tr-style-blink');
                    $('#ripple').addClass('tr-style-static');
                }
                if (json["bitcoin-cash"] != undefined) {
                    $scope.bitcoin_cash = json["bitcoin-cash"];
                    $('#bitcoin_cash').removeClass('tr-style-static');
                    $('#bitcoin_cash').addClass('tr-style-blink');
                }
                else {
                    $('#bitcoin_cash').removeClass('tr-style-blink');
                    $('#bitcoin_cash').addClass('tr-style-static');
                }
                if (json.stellar != undefined) {
                    $scope.stellar = json.stellar;
                    $('#stellar').removeClass('tr-style-static');
                    $('#stellar').addClass('tr-style-blink');
                }
                else {
                    $('#stellar').removeClass('tr-style-blink');
                    $('#stellar').addClass('tr-style-static');
                }
                if (json.eos != undefined) {
                    $scope.eos = json.eos;
                    $('#eos').removeClass('tr-style-static');
                    $('#eos').addClass('tr-style-blink');
                }
                else {
                    $('#eos').removeClass('tr-style-blink');
                    $('#eos').addClass('tr-style-static');
                }
                if (json.tether != undefined) {
                    $scope.tether = json.tether;
                    $('#tether').removeClass('tr-style-static');
                    $('#tether').addClass('tr-style-blink');
                }
                else {
                    $('#tether').removeClass('tr-style-blink');
                    $('#tether').addClass('tr-style-static');
                }
                if (json.cardano != undefined) {
                    $scope.cardano = json.cardano;
                    $('#cardano').removeClass('tr-style-static');
                    $('#cardano').addClass('tr-style-blink');
                }
                else {
                    $('#cardano').removeClass('tr-style-blink');
                    $('#cardano').addClass('tr-style-static');
                }
                if (json.tron != undefined) {
                    $scope.tron = json.tron;
                    $('#tron').removeClass('tr-style-static');
                    $('#tron').addClass('tr-style-blink');
                }
                else {
                    $('#tron').removeClass('tr-style-blink');
                    $('#tron').addClass('tr-style-static');
                }
            }
        }
    }


    $scope.RefreshCountTotalTokenSold = function () {
        homeServices.GetCountTotalTokenSold().then(function (response) {
            $scope.CountTotalTokenSold = response.data;
        });
    };
    $scope.RefreshBarChartDataOfTransection = function () {
        homeServices.GetBarChartDataOfTransection().then(function (response) {
            $scope.BarChartDataOfTransectionDates = response.data.Dates;
            $scope.BarChartDataOfTransectionData = response.data.Data;
        });
    };
    $scope.RefreshPieChartDataCustomerJoinedPerTimeTable = function () {
        homeServices.GetPieChartDataCustomerJoinedPerTimeTable().then(function (response) {
            $scope.CustomerJoinedPerTimeTableLabels = response.data.Labels;
            $scope.CustomerJoinedPerTimeTableData = response.data.Data;
        });
    };
    $scope.RefreshPieChartDataTransectionAsPerTimeTable = function () {
        homeServices.GetPieChartDataTransectionAsPerTimeTable().then(function (response) {
            $scope.TransectionAsPerTimeTableLabels = response.data.Labels;
            $scope.TransectionAsPerTimeTableData = response.data.Data;
        });
    };
    $scope.RefreshLineChartDataOfCoinRate = function () {
        homeServices.GetLineChartDataOfCoinRate().then(function (response) {
            $scope.LineChartDataOfCoinRateLabels = response.data.Labels;
            $scope.LineChartDataOfCoinRateData = response.data.Data;
            $scope.LineChartDataOfCoinRatedatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
            $scope.LineChartDataOfCoinRateoptions = {
                scales: {
                    yAxes: [
                      {
                          id: 'y-axis-1',
                          type: 'linear',
                          display: true,
                          position: 'left'
                      },
                      {
                          id: 'y-axis-2',
                          type: 'linear',
                          display: true,
                          position: 'right'
                      }
                    ]
                }
            };
        });
    }

});