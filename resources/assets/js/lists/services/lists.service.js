(function() {
    "use strict";

    angular.module('MListApp')
    .factory('ListsService', MLists);

    MLists.$inject = ['$http'];

    function MLists ($http) {
        return {
            fetchAll: fetchAll,
            fetchOne: fetchOne,
            update: update,
            create: create,
            remove: remove
        };

        function fetchAll() {
            return $http.get('/api/lists')
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return response.data;
            }

            function requestFailed(response) {
                console.log("Request for lists failed", response);
            }
        }

        function fetchOne(id) {
            return $http.get('/api/lists/' + id)
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return mapList(response.data[0]);
            }

            function requestFailed(response) {
                console.log("Request for list " + id + " failed", response);
            }
        }

        function create(data) {
            return $http.post(
                    '/api/lists/',
                    data
                )
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return response.data;
            }

            function requestFailed(response) {
                console.log("Request to create a list failed", response);
            }
        }

        function remove(id) {
            return $http.delete('/api/lists/' + id)
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return response.data;
            }

            function requestFailed(response) {
                console.error("Request for list with id: " + response.data.id + " failed", response);
            }
        }

        function update(id, data) {
            return $http.put(
                    '/api/lists/' + id,
                    data
                )
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return response.data;
            }

            function requestFailed(response) {
                console.error("Update request for list with id: " + data.id + " failed", response);
            }
        }

        // Private methods
        function mapList(data) {
            var list = new List(data);
            list.createdAt = data.created_at;
            list.updatedAt = data.updated_at;

            for(var i = 0, l = data.list_items.length; i < l; i++) {
                var itemData = data.list_items[i];
                var item = new ListItem(itemData);
                item.orderNum = itemData.order_num;
                list.addItem(item);
            }

            return list;
        };
    };

})();
