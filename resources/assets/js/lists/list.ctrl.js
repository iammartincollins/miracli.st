(function() {
    "use strict";

    ListCtrl.$inject = ['$scope', '$state', '$stateParams', 'Lists', 'ListsVM'];

    function ListCtrl ($scope, $state, $stateParams, Lists, ListsVM) {
        var vm = this;
        var id = $stateParams.id;

        vm.list = {};
        activate();

        function activate() {
            return getList().then(function() {
                vm.loaded = true;
            });
        }

        function getList() {
            return Lists.fetchOne(id)
                .then(function(data) {
                    vm.list = data;
                    return vm.list
                });
        }
    }

    function ListConfig($stateProvider) {
        $stateProvider.state('list', {
            url: '/list/{id:int}',
            views: {
                "main": {
                    controller: 'ListCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/lists/list.tpl.html',
                },
                "secondary-nav": {
                    controller: 'ListCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/lists/list-nav.tpl.html',
                }
            },
            data: {
                pageTitle: 'List',
                bodyClass: 'double-nav-padding'
            }
        });
    }

    angular.module('MListApp.list', [
        'ui.router'
    ])
    .config(ListConfig)
    .controller('ListCtrl', ListCtrl);
}());
