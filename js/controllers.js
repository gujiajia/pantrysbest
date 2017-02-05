angular.module('myApp.controllers', [])
    .controller('NavbarCtrl', function($http, $scope, $location) {
        $scope.citys = [];
        $scope.seletedCity = "";
        //自动获取城市列表
        $http.get('/data/citys.json').then(function(rtn) {
            $scope.citys = rtn.data;
            $scope.seletedCity = rtn.data[0];
        });
        $scope.seleteCity = function(city) {
            $scope.seletedCity = city;
        };

        //自动获取产品列表
        $http.get('/data/products.json').then(function(rtn) {
            $scope.productGroups = rtn.data.productGroups;
            console.log($scope.productGroups);
        });

        //进入产品组详情
        $scope.goProductGroup = function(productGroup) {
            $location.url('/productGroup/' + productGroup.id);
        }
    })
    .controller('IndexCtrl', function($routeParams) {
        console.log('welcome');
    })
    .controller('ProductGroupCtrl', function($routeParams, $scope, $http, $location) {
        //获取当前页面端参数ID
        $scope.productGroupId = $routeParams.productGroupId;

        //所有产品
        $scope.allProductGroups = [];
        //选中的产品组
        $scope.selectedProductGroup = {};
        $http.get('/data/products.json').then(function(rtn) {
            var productGroups = rtn.data.productGroups;
            $scope.allProductGroups = rtn.data.productGroups;
            $scope.selectedProductGroup = productGroups.find(function(productGroup) {
                return productGroup.id == $scope.productGroupId;
            });
        });
        $scope.goProductGroup = function(productGroup) {
            $location.url('/productGroup/' + productGroup.id);
            $scope.selectedProductGroup = productGroup;
        }
    })