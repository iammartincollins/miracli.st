(function() {
    "use strict";

    ListsCtrl.$inject = ['$scope', 'Lists', 'ListsVM'];

    function ListsCtrl ($scope, Lists, ListsVM) {
        var vm = this;
        vm.model = ListsVM;
        vm.model.update().then(function() {
            vm.loaded = true;
        });
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
        'ui.router'
    ])
    .config(ListsConfig)
    .controller('ListsCtrl', ListsCtrl);
}());
