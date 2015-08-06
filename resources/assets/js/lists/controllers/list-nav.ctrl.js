(function() {
    "use strict";

    angular.module('MListApp.list')
    .controller('ListNavCtrl', ListNavCtrl);

    ListNavCtrl.$inject = ['ListsVM'];

    function ListNavCtrl (ListsVM) {
        var vm = this;
        vm.model = ListsVM.model;
    }
})();
