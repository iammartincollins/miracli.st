(function() {
    "use strict";

    CreateCtrl.$inject = ['$scope', 'Lists'];

    function CreateCtrl ($scope, Lists) {
        var vm = this;
        vm.list = {};

        vm.process = process;

        function process() {
            return createList().then(function() {
                console.log("process() ", vm.list);
            });
        }

        function createList() {
            return Lists.create(vm.list)
                .then(function(data) {
                    console.log("createList ctrl: ", data);
                    // return data
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
