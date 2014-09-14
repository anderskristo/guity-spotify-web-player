'use strict';

angular.module('guityApp')
  .controller('ArtistCtrl', function ($scope, $routeParams, Spotify) {
    Spotify.getArtist($routeParams.id)
      .then(function(data) {
        $scope.artist = data;
        console.log(data);
      }, function(err) {
        console.error(err);
      });
  });
