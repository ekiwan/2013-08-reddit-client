angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services'])
.constant('serverRoute', 'http://localhost:3000')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: 'templates/view.html'
  })
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'templates/login.html'
  });
}]);

