( function () {

    function TimeTrackCtrl( AttlogsService ) {
        var vm = this;

        vm.limit = 10;

        this.loadMore = function () {
            this.limit += 10;
        }

        this.getLogsbyUser = function( id ) {
            AttlogsService.getLogsByUser( id )
                .then( function (response) {
                    vm.checkTime = response.data.map( function(x) {
                        x.Checktime = moment().format(x.Checktime);
                        return x.Checktime;
                    } )
                    // this.checkTime.pop();
                }, response => {
                    // error
                    console.log( response )
                });
        }

        AttlogsService.getUsers()
            .then( response => {
                this.users = response.data;
            }, response => {
                // error
                console.log( response )
            })

    }

    angular
        .module('timetracker')
        .controller('TimeTrackCtrl', TimeTrackCtrl);
})();
