var app = angular.module('timetracker', [
'ngRoute'
]);

app.config( function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/controller/timetrack.html',
            controller  : 'TimeTrackCtrl as vm'
        });
})
