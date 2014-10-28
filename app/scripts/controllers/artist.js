'use strict';

angular.module('guityApp')
  .controller('ArtistCtrl', function ($scope, $routeParams, guityAPI, Auth) {

    $scope.artist = $routeParams.artist;
    guityAPI.getArtist($scope.artist).then(function (artist) {
      $scope.artistInfo = artist;
    });

    guityAPI.getArtistAlbums($scope.artist, Auth.getUserCountry()).then(function (albums) {
      $scope.albums = albums.items;
    });
  });
