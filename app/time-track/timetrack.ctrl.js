( function () {

    function TimeTrackCtrl( AttlogsService ) {

        AttlogsService.getLogsByUser( 14011 )
            .then( response => {
                this.checkTime = response.data.map( x => {
                    x.Checktime = moment().format(x.Checktime);
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
