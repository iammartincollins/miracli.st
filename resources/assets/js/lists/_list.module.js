(function() {
    function ListConfig($stateProvider) {
        $stateProvider.state('list', {
            url: '/list/{id:int}',
            views: {
                "main": {
                    controller: 'ListCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/lists/list.tpl.html',
                },
                "secondary-nav": {
                    controller: 'ListNavCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/lists/list-nav.tpl.html',
                }
            },
            data: {
                pageTitle: 'List',
                bodyClass: 'double-nav-padding'
            }
        });
    }

    angular.module('MListApp.list', [
        'ui.router'
    ])
        .config(ListConfig);
})();