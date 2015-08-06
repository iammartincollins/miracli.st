(function () {
    "use strict";

    EditCtrl.$inject = ['$state', '$stateParams', 'ListsService', 'ListsVM'];

    function EditCtrl($state, $stateParams, ListsService, ListsVM) {
        var vm = this;
        var id = $stateParams.id;
        vm.model = ListsVM.model;
        vm.remove = _remove;
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
    }

    angular.module('MListApp.edit')
        .controller('EditCtrl', EditCtrl);
}());
