(function() {
    "use strict";

    HomeCtrl.$inject = ['$scope', 'Lists'];

    function HomeCtrl ($scope, Lists) {
        var vm = this;
        Lists.fetchAll()
            .success(function(response) {
                vm.lists = response;
            });

    }

    function HomeConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                  controller: 'HomeCtrl',
                  controllerAs: 'vm',
                  templateUrl: 'templates/home/home.tpl.html',
                }
            },
            data: {
                pageTitle: 'Home'
            }
        });
    }

    angular.module('MListApp.home', [
        'ui.router',
        'MListApp.directives'
    ])
    .config(HomeConfig)
    .controller('HomeCtrl', HomeCtrl);
}());
