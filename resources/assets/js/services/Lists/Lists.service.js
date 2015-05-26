    (function() {
    "use strict";

    function MLists ($http) {
        return {
            fetchAll: fetchAll,
            fetchOne: fetchOne,
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
                console.log("Request for lists failed");
            }
        }

        function fetchOne(id) {
            return $http.get('/api/lists/' + id)
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                return response.data[0];
            }

            function requestFailed(response) {
                console.log("Request for lists failed");
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
                // console.log("Request for lists succeded");
                return response.data;
            }

            function requestFailed(response) {
                console.log("Request for lists failed");
            }
        }

        function remove(id) {
            return $http.delete('/api/lists/' + id)
                .then(requestComplete)
                .catch(requestFailed);

            function requestComplete(response) {
                // console.log("Request for lists succeded");
                console.log("requestComplete: ", response);
                return response.data;
            }

            function requestFailed(response) {
                console.error("Request for list with id: " + response.data.id + " failed");
            }
        }

    };

    angular.module('MListApp')
    .factory('Lists', MLists);

}());
