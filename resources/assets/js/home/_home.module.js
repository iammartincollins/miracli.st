(function() {
    "use strict";

    function HomeConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'templates/home/home.tpl.html',
                }
            },
            data: {
                pageTitle: 'Home'
            }
        });
    }

    angular.module('MListApp.home', [
        'ui.router'
    ])
        .config(HomeConfig);
}());
