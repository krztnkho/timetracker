var app = angular.module('timetracker', ['ngRoute']);

app.config($routeProvider => {
    $routeProvider.when('/', {
        templateUrl: 'app/time-track/timetrack.html',
        controller: 'TimeTrackCtrl as vm'
    });
});