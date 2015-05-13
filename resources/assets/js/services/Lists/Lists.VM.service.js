(function() {
    'use strict';

    function ListsViewModel (Lists) {
        var vm = this;
        vm.lists = {};

        this.update = function () {
            return Lists.fetchAll()
                .then(function(data) {
                    vm.lists = data;
                    return vm.lists;
                }
            );
        };
    }

    angular.module('MListApp')
    .service('ListsVM', ListsViewModel);
}());
