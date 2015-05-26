(function() {
    "use strict";

    CreateCtrl.$inject = ['$scope', '$state', 'Lists', 'ListsVM'];

    function CreateCtrl ($scope, $state, Lists, ListsVM) {
        var vm = this;
        vm.list = new List();

        //================= Public methods
        vm.process = process;

        //================== Private methods
        function process() {
            return createList().then(function (data) {
                ListsVM.update()
                    .then(function () {
                        $state.go('list', {'id': data.id });
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
