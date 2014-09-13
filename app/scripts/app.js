'use strict';

angular
  .module('guityApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'spotify'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
