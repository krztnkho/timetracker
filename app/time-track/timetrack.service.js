( function () {

    function AttlogsService( $http ) {

        let _getLogsByUser = function( id ) {
            return $http.get('http://10.1.2.42:8080/attlogs/' + id);
        };

        let _getUsers = function () {
            return $http.get('http://10.1.2.42:8080/users');
        }

        return {
            getLogsByUser : _getLogsByUser,
            getUsers      : _getUsers
        }
    }
    angular
    .module('timetracker')
    .factory('AttlogsService', AttlogsService);
})();
