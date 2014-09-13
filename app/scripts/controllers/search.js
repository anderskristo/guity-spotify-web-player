'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, Spotify) {
    $scope.$watch('searchField', function(newVal) {
      Spotify.search(newVal, 'artist').then(function (data) {
        $scope.artists = data.artists.items;
      });
    });
  });
