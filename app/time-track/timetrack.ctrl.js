( function () {

    function TimeTrackCtrl( AttlogsService ) {
        var vm = this;

        vm.title = "test";

        console.log( AttlogsService.getLogsByUser( 14011 ))
    }

    angular
        .module('timetracker')
        .controller('TimeTrackCtrl', TimeTrackCtrl);
})();
