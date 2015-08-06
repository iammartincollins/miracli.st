(function () {
    "use strict";

    angular.module('MListApp.lists')
        .factory('ListsVM', ListsVM);

    function ListsVM () {
        var _model = {
            list: {},
            lists: []
        };

        var _setList = function(list) {
            _model.list = list;
        };

        var _setLists = function(lists) {
            _model.lists = lists;
        };

        return {
            model: _model,
            setList: _setList,
            setLists: _setLists
        }
    }
})();