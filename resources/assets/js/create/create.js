(function() {
    "use strict";

    CreateCtrl.$inject = ['$scope', '$state', 'Lists'];

    function CreateCtrl ($scope, $state, Lists) {
        var vm = this;
        vm.list = {};

        vm.process = process;

        function process() {
            return createList().then(function(data) {
                $state.go('list', {'id': data.id });
            });
        }

        function createList() {
            return Lists.create(vm.list)
                .then(function(data) {
                    return data;
                })
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
