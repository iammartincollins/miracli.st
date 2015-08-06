(function() {
    "use strict";

    HomeCtrl.$inject = ['$scope', 'Lists'];

    function HomeCtrl ($scope, Lists) {
        var vm = this;
    }

    angular.module('MListApp.home')
    .controller('HomeCtrl', HomeCtrl);
}());
