(function() {
    function ListsConfig($stateProvider) {
        $stateProvider.state('lists', {
            url: '/lists',
            views: {
                "main": {
                    controller: 'ListsCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/lists/lists.tpl.html',
                }
            },
            data: {
                pageTitle: 'Lists'
            }
        });
    }

    angular.module('MListApp.lists', [
        'ui.router'
    ])
        .config(ListsConfig);
})();