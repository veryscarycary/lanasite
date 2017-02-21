
var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/about', {
    templateUrl: './src/directives/about/about.html'
  })
  .when('/contact', {
    templateUrl: './src/directives/contact/contact.html'
  })
  .when('/', {
    templateUrl: './src/directives/main/main.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
