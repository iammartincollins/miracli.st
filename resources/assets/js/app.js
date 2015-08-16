(function () {
    'use strict';

    function AppCtrl($scope) {
        var vm = this;

        // Route debugging
        $scope.$on('$stateNotFound', function (event, unfoundState) {
            console.log("State not found: ", unfoundState.to);
        });

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if (angular.isDefined(toState.data.pageTitle)) {
                vm.pageTitle = toState.data.pageTitle + ' | Miracli.st';
            }
            var bodyClass = toState.data.bodyClass;
            vm.bodyClass = angular.isDefined(bodyClass) ? bodyClass : 'single-nav-padding';
        });
    }

    angular.module('MListApp', [
        'ui.router',
        'MListApp.home',
        'MListApp.lists',
        'MListApp.list',
        'MListApp.create',
        'MListApp.edit'
    ])

        .config(['$urlRouterProvider', '$httpProvider', '$locationProvider', function myAppConfig($urlRouterProvider, $httpProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/home');
            // $httpProvider.defaults.cache = true;
            $locationProvider.html5Mode(true);
        }])

        .controller('AppCtrl', AppCtrl);
}());
