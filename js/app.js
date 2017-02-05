angular.module('myApp', ['ui.bootstrap', "myApp.controllers", "ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            controller: 'IndexCtrl'
        }).when('/productGroup/:productGroupId', {
            templateUrl: 'pages/product-group.html',
            controller: 'ProductGroupCtrl'
        })
    })