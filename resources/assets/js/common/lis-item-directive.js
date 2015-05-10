(function() {
    "use strict";

    function MListsListitem () {
        console.log('mc!!');
        var directive = {
            restrict: 'EA',
            templateUrl: 'templates/lists/item.tpl.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            //
        }
    };

    angular.module('MListApp.directives', [
        // 'ngResource'
    ])
    .directive('mlistsListitem', MListsListitem);

}());
