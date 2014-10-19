'use strict';

angular.module('guityApp')
  .controller('ArtistCtrl', function ($scope, $routeParams, guityAPI, Auth) {
    $scope.artist = $routeParams.artist;
    guityAPI.getArtist($scope.artist).then(function (artist) {
      $scope.artistInfo = artist;
    });
  });
