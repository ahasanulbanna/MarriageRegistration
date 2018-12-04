CCDApp.filter('replace', [function () {
    return function (input, from, to) {
        if (input === undefined) {
            return;
        }
        var regex = new RegExp(from, 'g');
        return input.replace(regex, to);
    };
}]);

CCDApp.filter('smallize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toLowerCase() + input.substr(1).toLowerCase() : '';
    }
});

CCDApp.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url.toString());
    };
}]);

CCDApp.filter('replace', [function () {
    return function (input, from, to) {
        if (input === undefined) {
            return;
        }
        var regex = new RegExp(from, 'g');
        return input.replace(regex, to);
    };
}]);