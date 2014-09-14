'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, Spotify) {
    $scope.$watch('searchField', function(newVal) {
      if (newVal) {
        Spotify.search(newVal, 'artist').then(function (data) {
          $scope.artists = data.artists.items;
        });
        $('.search-results').addClass('is-active');
      } else {
        $scope.artist = [];
        $('.search-results').removeClass('is-active');
      }
    });
  });
