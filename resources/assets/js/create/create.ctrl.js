(function () {
    "use strict";

    CreateCtrl.$inject = ['$state', 'ListsService', 'ListsVM'];

    function CreateCtrl($state, ListsService, ListsVM) {
        var vm = this;

        vm.list = new List({
            "name": "",
            "description": "This is a list we have created for you, to help you on your way."
        });
        vm.list.addItem(new ListItem({
            orderNum: 1,
            title: "Example item 1",
            body: "This is an example of an item you can add to your list."
        }));
        vm.list.addItem(new ListItem({
            orderNum: 2,
            title: "Example item 2",
            body: "This is another example of an item you can add to your list."
        }));

        //================= Public methods
        vm.process = process;

        //================== Private methods
        function process() {
            return createList()
                .then(function (data) {
                    ListsVM.setLists(data.lists);
                    $state.go('edit', {'id': data.list.id});
                }
            );
        }

        function createList() {
            return ListsService.create(vm.list)
                .then(function (data) {
                    return data.data;
                });
        }
    }

    angular.module('MListApp.create')
        .controller('CreateCtrl', CreateCtrl);
}());
