'use strict';

angular.module('guityApp')
  .controller('LoginCtrl', function ($scope, Spotify) {
    $scope.isLoggedIn = false

    $scope.login = function () {
      Spotify.login();
    };
  });
