(function() {
    "use strict";

    ListsCtrl.$inject = ['$scope', 'Lists'];

    function ListsCtrl ($scope, Lists) {
        var vm = this;
        vm.lists = {};
        activate();

        function activate() {
            return getLists().then(function() {
                vm.loaded = true;
            });
        }

        function getLists() {
            return Lists.fetchAll()
                .then(function(data) {
                    vm.lists = data;
                    return vm.lists
                });
        }

    }

    function ListsConfig($stateProvider) {
        $stateProvider.state('lists', {
            url: '/lists',
            views: {
                "main": {
                  controller: 'ListsCtrl',
                  controllerAs: 'vm',
                  templateUrl: 'templates/lists/lists.tpl.html',
                }
            },
            data: {
                pageTitle: 'Lists'
            }
        });
    }

    angular.module('MListApp.lists', [
        'ui.router',
        'MListApp.directives'
    ])
    .config(ListsConfig)
    .controller('ListsCtrl', ListsCtrl);
}());
