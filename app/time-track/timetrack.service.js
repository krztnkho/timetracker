( function () {

    function AttlogsService( $http ) {
        var AttlogsService = {};

        AttlogsService.someValue = 'sex';

        AttlogsService.getLogsByUser = function( id ) {
            $http.get('http://10.1.2.42:8080/attlogs/' + id)
            .then( function success( response ) {
                console.log( response );
            }, function error( response ) {
                console.log ( response )
            });
        };
        return AttlogsService;
    }
    angular
    .module('timetracker')
    .factory('AttlogsService', AttlogsService);
})();
