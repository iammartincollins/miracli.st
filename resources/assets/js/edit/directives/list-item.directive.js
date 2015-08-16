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

    /*jshint validthis: true */
    function mListItemsCtrl($scope) {
        this.addItem = function () {
            $scope.vm.list.addNewItem();
        };

        this.delete = function (item) {
            $scope.vm.list.deleteItem(item);
        };

        this.moveUp = function(item) {
            $scope.vm.list.moveUp(item);
        };

        this.moveDown = function(item) {
            $scope.vm.list.moveDown(item);
        };
    }

    angular.module('MListApp')
        .directive('mListItems', mListItems);
}());
