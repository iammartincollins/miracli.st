(function() {
    "use strict";

    function EditNavCtrl() {
        var vm = this;

        vm.save = function (redirect) {
            console.log("save!");
        };
    }

    angular.module("MListApp")
        .controller('EditNavCtrl', EditNavCtrl);

}());