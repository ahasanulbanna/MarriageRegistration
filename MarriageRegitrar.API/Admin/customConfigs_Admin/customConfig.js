CCDApp.config(['tooltipsConfProvider', function configConf(tooltipsConfProvider) {
    tooltipsConfProvider.configure({
        'smart': true,
        'size': 'large',
        'speed': 'slow',
        'tooltipTemplateUrlCache': true
        //etc...
    });

}]);