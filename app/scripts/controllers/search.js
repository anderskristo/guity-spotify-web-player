'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, Spotify) {
    $scope.$watch('searchField', function(newVal) {
      if (newVal) {
        Spotify.search(newVal, 'artist').then(function (data) {
          $scope.artists = data.artists.items;
          console.log($scope.artists)
        });
      } else {
        $scope.artists = [];
      }
    });
  });
