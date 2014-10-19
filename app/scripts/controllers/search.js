'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, guityAPI) {
    $scope.$watch('searchField', function(newVal) {
      if (newVal) {
        guityAPI.getSearch(newVal, 'track').then(function (data) {
          $scope.results = data.tracks.items;
          console.log($scope.results)
        });
        $('.search-results').addClass('is-active');
        $('.search-artist').removeClass('is-hidden');
      } else {
        $scope.artist = [];
        $('.search-results').removeClass('is-active');
        $('.search-artist').addClass('is-hidden');
      }
    });
  });
