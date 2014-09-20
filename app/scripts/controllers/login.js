'use strict';

angular.module('guityApp')
  .controller('LoginCtrl', function ($scope, Spotify, $location) {
    $scope.isLoggedIn = false;
    $scope.login = function () {
      Spotify.login();
    };
  });
