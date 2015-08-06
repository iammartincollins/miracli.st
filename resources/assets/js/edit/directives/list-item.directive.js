(function() {
    'use strict';

    function mListItems () {
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

    function mListItemsCtrl ($scope) {
        var vm = this;

        vm.addItem = function () {
            var nextOrderNum = $scope.vm.list.getNextOrderNum();
            var item = new ListItem();
            item.orderNum = nextOrderNum;
            vm.list.addItem(item);
        };

        vm.moveUp = function (item) {
        //TODO: move validation to model?
            var otherItem = $scope.vm.list.getItemByOrderNum(item.orderNum - 1);
            if (otherItem) {
                swapItems(item, otherItem); //TODO: and move this to the list model, the directive should have no knowledge of swapping list's items around
            }
        };

        vm.moveDown = function (item) {
            var otherItem = $scope.vm.list.getItemByOrderNum(item.orderNum + 1);
            if (otherItem) {
                swapItems(item, otherItem);
            }
        };

        var swapItems = function (item, swapWith) {
            var otherItemOrderNum = swapWith.orderNum;
            swapWith.orderNum = item.orderNum;
            item.orderNum = otherItemOrderNum;
        };
    }

    angular.module('MListApp')
        .directive('mListItems', mListItems);
}());
