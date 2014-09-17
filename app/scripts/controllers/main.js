'use strict';

angular.module('guityApp')
  .controller('MainCtrl', function ($scope, Spotify) {
    $scope.login = function () {
      Spotify.login();
    };
    Spotify.getCurrentUser().then(function (data) {
      console.log(data);
    });
  });
