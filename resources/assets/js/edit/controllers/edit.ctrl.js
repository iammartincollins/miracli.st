(function () {
    "use strict";

    EditCtrl.$inject = ['$state', '$stateParams', 'ListsService', 'ListsVM'];

    function EditCtrl($state, $stateParams, ListsService, ListsVM) {
        var vm = this;
        var id = $stateParams.id;
        vm.model = ListsVM.model;
        vm.remove = _remove;
        vm.save = _save;

        vm.list = {};
        _activate();

        function _activate() {
            return getList().then(function (list) {
                ListsVM.setList(list);
                vm.loaded = true;
            });
        }

        function _remove() {
            return removeList().then(function () {
                ListsVM.update()
                    .then(function () {
                        $state.go('lists');
                    }
                );
            });
        }

        function _save(redirect) {
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
            return ListsService.fetchOne(id)
                .then(function (data) {
                    return data
                });
        }

        function removeList() {
            return ListsService._remove(id)
                .then(function (data) {
                    return data
                });
        }

        function updateList() {
            return ListsService.fetchOne(id)
                .then(function (data) {
                    console.log("update list: ", data);
                    return data;
                });
        }
    }

    angular.module('MListApp.edit')
        .controller('EditCtrl', EditCtrl);
}());
