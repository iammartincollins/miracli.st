(function() {
    'use strict';

    function mListItems () {
        var directive = {
            // link: linkFunc,
            controller: mListItemsCtrl,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'templates/edit/list-items.tpl.html',
            restrict: 'EA',
            scope: {
                list: '=list'
            }
        };
        return directive;
        //
        // function linkFunc (scope, element, attrs) {
        // };
    }

    mListItemsCtrl.$inject = ['$scope'];

    function mListItemsCtrl ($scope) {
        var vm = this;

        vm.addItem = function () {
            var item = new ListItem();
            console.log($scope.vm.list.getNextOrderNum());
            item.orderNum = $scope.vm.list.getNextOrderNum();
            vm.list.addItem(item);
        };

        vm.moveUp = function (item) {
            var otherItem = $scope.vm.list.getItemByOrderNum(item.orderNum - 1);
            if (otherItem) {
                swapItems(item, otherItem);
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
