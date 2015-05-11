    (function() {
    "use strict";

    function MLists ($http) {
        return {
            fetchAll: fetchAll,
            fetchOne: fetchOne,
            create: create
        };

        function fetchAll() {
            return $http.get('/api/lists', {
                    cache: true
                })
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

    };

    angular.module('MListApp')
    .factory('Lists', MLists);

}());
