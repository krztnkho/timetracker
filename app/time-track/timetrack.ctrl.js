( function () {

    function TimeTrackCtrl( AttlogsService ) {
        var vm = this;

        vm.title = "test";

        AttlogsService.getLogsByUser( 14011 )
            .then( function success( response ) {
                console.log( response);
            }, function error( response ) {
                console.log ( response )
            });
    }

    angular
        .module('timetracker')
        .controller('TimeTrackCtrl', TimeTrackCtrl);
})();
