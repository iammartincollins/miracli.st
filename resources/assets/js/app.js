"use strict";

function AppCtrl ($scope, $location) {
    var vm = this;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            vm.pageTitle += toState.data.pageTitle + ' | MList';
        }
    });
}

angular.module('MListApp', [
    'ui.router',
    'ngResource',
    'MListApp.home',
    'MListApp.lists',
    'MListApp.list',
    'MListApp.create'
])

.config(['$urlRouterProvider', '$httpProvider', '$locationProvider', function myAppConfig ($urlRouterProvider, $httpProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    // $httpProvider.defaults.cache = true;
    $locationProvider.html5Mode(true);
}])

.controller( 'AppCtrl', AppCtrl);
