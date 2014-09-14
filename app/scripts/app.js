'use strict';

angular
  .module('guityApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'spotify'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artist/:id', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
