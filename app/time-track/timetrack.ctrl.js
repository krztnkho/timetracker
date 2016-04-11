( function () {

    function TimeTrackCtrl( AttlogsService ) {

        AttlogsService.getLogsByUser( 14011 )
            .then( response => {
                this.checkTime = response.data.map( x => {
                    return x.Checktime;
                } )
                this.checkTime.pop();
            }, response => {
                // error
                console.log( response )
            }
        );

    }

    angular
        .module('timetracker')
        .controller('TimeTrackCtrl', TimeTrackCtrl);
})();
