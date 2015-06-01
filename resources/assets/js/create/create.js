(function() {
    "use strict";

    CreateCtrl.$inject = ['$scope', '$state', 'Lists', 'ListsVM'];

    function CreateCtrl ($scope, $state, Lists, ListsVM) {
        var vm = this;

        vm.list = new List({
            "name": "",
            "description": "This is a list we have created for you, to get help you on your way."
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
            return createList().then(function (data) {
                ListsVM.update()
                    .then(function () {
                        $state.go('edit', {'id': data.id });
                    }
                );
            });
        }

        function createList() {
            return Lists.create(vm.list)
                .then(function(data) {
                    return data;
            });
        }
    }

    function CreateConfig($stateProvider) {
        $stateProvider.state('create', {
            url: '/create',
            views: {
                "main": {
                  controller: 'CreateCtrl',
                  controllerAs: 'vm',
                  templateUrl: 'templates/create/create.tpl.html',
                }
            },
            data: {
                pageTitle: 'Create a list'
            }
        });
    }

    angular.module('MListApp.create', [
        'ui.router',
    ])
    .config(CreateConfig)
    .controller('CreateCtrl', CreateCtrl);
}());
