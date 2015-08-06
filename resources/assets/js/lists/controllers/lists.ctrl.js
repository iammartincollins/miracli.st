(function() {
    "use strict";

    ListsCtrl.$inject = ['ListsService', 'ListsVM'];

    function ListsCtrl (ListsService, ListsVM) {
        var vm = this;
        vm.model = ListsVM.model;
        activate();

        function activate() {
            return getLists().then(function(lists) {
                ListsVM.setLists(lists);
                vm.loaded = true;
            });
        }

        function getLists() {
            return ListsService.fetchAll()
                .then(function(data) {
                    return data;
                });
        }
    }

    angular.module('MListApp.lists')
    .controller('ListsCtrl', ListsCtrl);

}());
