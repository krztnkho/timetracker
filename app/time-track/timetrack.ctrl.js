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
                    // for fucked up data
                    let lastItem = vm.checkTime[vm.checkTime.length -1].split('-');
                    if (lastItem[0] === '2103') {
                        vm.checkTime.pop();
                    }
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
