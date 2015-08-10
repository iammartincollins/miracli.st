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
        var selectedList = $scope.vm.list;

        vm.addItem = function () {
            var item = new ListItem();
            vm.list.addItem(item);
        };

        vm.moveUp = function(item) {
            selectedList.moveUp(item);
        };

        vm.moveDown = function(item) {
            selectedList.moveDown(item);
        };
    }

    angular.module('MListApp')
        .directive('mListItems', mListItems);
}());
