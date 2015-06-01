(function() {
    "use strict";

    EditCtrl.$inject = ['$scope', '$state', '$stateParams', 'Lists', 'ListsVM'];

    function EditCtrl ($scope, $state, $stateParams, Lists, ListsVM) {
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
                    console.log("edit ", data);
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

    function EditConfig($stateProvider) {
        $stateProvider.state('edit', {
            url: '/list/{id:int}/edit',
            views: {
                "main": {
                  controller: 'EditCtrl',
                  controllerAs: 'vm',
                  templateUrl: 'templates/edit/edit.tpl.html',
                }
            },
            data: {
                pageTitle: 'Edit your list'
            }
        });
    }

    angular.module('MListApp.edit', [
        'ui.router',
    ])
    .config(EditConfig)
    .controller('EditCtrl', EditCtrl);
}());
