(function () {
    "use strict";

    EditNavCtrl.$inject = ['$state', 'ListsVM', 'ListsService'];

    function EditNavCtrl($state, ListsVM, ListsService) {
        var vm = this;
        vm.model = ListsVM.model;
        vm.save = _save;

        function _save(redirect) {
            var id = ListsVM.model.list.id;
            return updateList(id, ListsVM.model.list)
                .then(function (data) {
                    ListsVM.setLists(data);
                    if (redirect) {
                        // go to list
                        $state.go('list', {'id': id});
                    }
                    //show confirmation notification and remain on page
                    console.log("Standard save");
                }
            );

        }

        function updateList(id, data) {
            return ListsService.update(id, data)
                .then(function (response) {
                    return response;
                });
        }
    }

    angular.module("MListApp")
        .controller('EditNavCtrl', EditNavCtrl);

}());