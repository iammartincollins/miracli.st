(function() {
    "use strict";

    ListCtrl.$inject = ['$scope', '$stateParams', 'Lists'];

    function ListCtrl ($scope, $stateParams, Lists) {
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
                }
            },
            data: {
                pageTitle: 'List'
            }
        });
    }

    angular.module('MListApp.list', [
        'ui.router',
        'MListApp.directives'
    ])
    .config(ListConfig)
    .controller('ListCtrl', ListCtrl);
}());
