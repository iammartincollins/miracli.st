(function() {
    "use strict";

    ListCtrl.$inject = ['$scope', '$state','$stateParams', 'Lists', 'ListsVM'];

    function ListCtrl ($scope, $state, $stateParams, Lists, ListsVM) {
        var vm = this;
        var id = $stateParams.id;
        vm.remove = remove;

        vm.list = {};
        activate();

        function activate() {
            return getList().then(function() {
                vm.loaded = true;
            });
        }

        function remove() {
            return removeList().then(function() {
                ListsVM.update()
                    .then(function() {
                        $state.go('lists');
                    }
                );
            });
        }

        function getList() {
            return Lists.fetchOne(id)
                .then(function(data) {
                    vm.list = data;
                    return vm.list
                });
        }

        function removeList() {
            return Lists.remove(id)
                .then(function(data) {
                    return data
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
