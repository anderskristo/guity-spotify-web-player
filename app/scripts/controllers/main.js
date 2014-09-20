'use strict';

angular.module('guityApp')
  .controller('MainCtrl', function ($scope, Spotify) {
    Spotify.getCurrentUser().then(function (data) {
      console.log(data);
      $scope.userName = data.display_name;
    });
  });
