(function () {
    'use strict';

    function mListItems() {
        return {
            controller: mListItemsCtrl,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'templates/edit/list-items.tpl.html',
            restrict: 'EA',
            scope: {
                list: '=list'
            }
        };
    }

    mListItemsCtrl.$inject = ['$scope'];

    function mListItemsCtrl($scope) {
        var vm = this;

        vm.addItem = function () {
            $scope.vm.list.addNewItem();
        };

        vm.moveUp = function(item) {
            $scope.vm.list.moveUp(item);
        };

        vm.moveDown = function(item) {
            $scope.vm.list.moveDown(item);
        };
    }

    angular.module('MListApp')
        .directive('mListItems', mListItems);
}());
