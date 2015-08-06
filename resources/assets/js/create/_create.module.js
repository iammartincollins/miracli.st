(function () {
    function CreateConfig($stateProvider) {
        $stateProvider.state('create', {
            url: '/create',
            views: {
                "main": {
                    controller: 'CreateCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/create/create.tpl.html'
                }
            },
            data: {
                pageTitle: 'Create a list'
            }
        });
    }

    angular.module('MListApp.create', [
        'ui.router'
    ])
        .config(CreateConfig);
})();