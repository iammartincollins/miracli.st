(function() {
    "use strict";

    angular.module('MListApp.list')
    .controller('ListCtrl', ListCtrl);

    ListCtrl.$inject = ['$stateParams', 'ListsService', 'ListsVM'];

    function ListCtrl ($stateParams, ListsService, ListsVM) {
        var vm = this;
        var id = $stateParams.id;
        vm.model = ListsVM.model;
        activate();

        function activate() {
            return getList(id).then(function(list) {
                ListsVM.setList(list);
                vm.loaded = true;
            });
        }

        function getList(listId) {
            return ListsService.fetchOne(listId)
                .then(function(data) {
                    return data;
                });
        }
    }
})();
