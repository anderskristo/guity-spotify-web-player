'use strict';

angular.module('guityApp')
  .controller('ArtistCtrl', function ($scope, $routeParams, guityAPI, Auth) {

    $scope.artist = $routeParams.artist;

    // Get artist
    guityAPI.getArtist($scope.artist).then(function (artist) {
      $scope.artistInfo = artist;
    });

    // Get top tracks
    guityAPI.getArtistTopTracks($scope.artist, Auth.getUserCountry()).then(function (tracks) {
      $scope.tracks = tracks.tracks;
    });

    // Get albums
    guityAPI.getArtistAlbums($scope.artist, Auth.getUserCountry()).then(function (albums) {
      $scope.albums = albums.items;
    });

    // Get related artists
    guityAPI.getRelatedArtists($scope.artist, Auth.getUserCountry()).then(function (related) {
      $scope.related = related.artists;
    });

    // Show the selected element
    $scope.currentElem = 'tracks';

    $scope.isCurrent = function (elem) {
        return elem === $scope.currentElem;
    };

    $scope.setCurrent = function (elem) {
        $scope.currentElem = elem;
    };

    $scope.isActive = function (currentElem) {
        return $scope.currentElem === currentElem || $scope.currentElem === '';
    };


  });
