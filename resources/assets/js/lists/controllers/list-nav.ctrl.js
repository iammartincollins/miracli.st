(function () {
    "use strict";

    angular.module('MListApp.list')
        .controller('ListNavCtrl', ListNavCtrl);

    ListNavCtrl.$inject = ['$state', 'ListsVM', 'ListsService'];

    function ListNavCtrl($state, ListsVM, ListsService) {
        var vm = this;
        vm.model = ListsVM.model;
        vm.removeList = _removeList;

        function _removeList(id) {
            return removeList(id).then(function (response) {
                ListsVM.setLists(response.data)
                $state.go('lists');
            });
        }

        function removeList(id) {
            return ListsService.remove(id)
                .then(function (data) {
                    return data
                });
        }
    }
})();
