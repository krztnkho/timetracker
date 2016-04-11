( function () {

    function AttlogsService( $http ) {

        var _getLogsByUser = function( id ) {
            return $http.get('http://10.1.2.42:8080/attlogs/' + id);
        };

        return {
            getLogsByUser : _getLogsByUser
        }
    }
    angular
    .module('timetracker')
    .factory('AttlogsService', AttlogsService);
})();
