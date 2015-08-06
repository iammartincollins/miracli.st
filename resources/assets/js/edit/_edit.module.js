(function() {
    function EditConfig($stateProvider) {
        $stateProvider.state('edit', {
            url: '/list/{id:int}/edit',
            views: {
                "main": {
                    controller: 'EditCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/edit/edit.tpl.html'
                },
                "secondary-nav": {
                    controller: 'EditNavCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/edit/edit-list-nav.tpl.html'
                }
            },
            data: {
                pageTitle: 'Edit your list',
                bodyClass: 'double-nav-padding'
            }
        });
    }

    angular.module('MListApp.edit', [
        'ui.router'
    ])
    .config(EditConfig);
})();