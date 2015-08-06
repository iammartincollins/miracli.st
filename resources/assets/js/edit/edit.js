(function () {
    "use strict";

    EditCtrl.$inject = ['$scope', '$state', '$stateParams', 'Lists', 'ListsVM'];

    function EditCtrl($scope, $state, $stateParams, Lists, ListsVM) {
        var vm = this;
        var id = $stateParams.id;
        vm.remove = remove;
        vm.save = save;

        vm.list = {};
        activate();

        function activate() {
            return getList().then(function () {
                vm.loaded = true;
            });
        }

        function remove() {
            return removeList().then(function () {
                ListsVM.update()
                    .then(function () {
                        $state.go('lists');
                    }
                );
            });
        }

        function save(redirect) {
            return updateList().then(function () {
                // NOTE: Controller is being called twice, so therefore there are two different values for vm.list - one
                // in the normal ctrl and the other in the 'save' nav bar area so saving does nothing.
                ListsVM.update(vm.list)
                    .then(function () {
                        if (redirect) {
                            // go to list
                            $state.go('list', {'id': data.id});
                        }
                        //show confirmation notification and remain on page
                        console.log("saved!");
                    }
                );
            });
        }

        function getList() {
            return Lists.fetchOne(id)
                .then(function (data) {
                    console.log("edit ", data);
                    vm.list = data;
                    return vm.list
                });
        }

        function removeList() {
            return Lists.remove(id)
                .then(function (data) {
                    return data
                });
        }

        function updateList() {
            return Lists.fetchOne(id)
                .then(function (data) {
                    console.log("update list: ", data);
                    return data;
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
                    templateUrl: 'templates/edit/edit.tpl.html'
                },
                "secondary-nav": {
                    controller: 'EditNavCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/edit/edit-list-nav.tpl.html'
                }
            },
            data: {
                pageTitle: 'Edit your list',
                bodyClass: 'double-nav-padding'
            }
        });
    }

    angular.module('MListApp.edit', [
        'ui.router'
    ])
        .config(EditConfig)
        .controller('EditCtrl', EditCtrl);
}());
