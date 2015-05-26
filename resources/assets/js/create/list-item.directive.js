(function() {
    'use strict';

    function mListItems () {
        var directive = {
            link: linkFunc,
            controller: mListItemsCtrl,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'templates/create/list-items.tpl.html',
            restrict: 'EA',
            scope: {
                list: '=list'
            }
        };
        return directive;

        function linkFunc (scope, element, attrs) {
        }
    }

    function mListItemsCtrl () {
        var vm = this;
        var itemCount = 1;

        vm.addItem = function () {
            var item = new ListItem();
            item.order_num = itemCount++;
            vm.list.addItem(item);
        };
    }

    angular.module('MListApp')
        .directive('mListItems', mListItems);
}());
