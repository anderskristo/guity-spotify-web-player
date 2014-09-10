'use strict';

angular.module('guityApp')
  .controller('MainCtrl', function ($scope, searchArtists) {
    $scope.$watch('searchField', function(newVal) {
      searchArtists.query({artists: newVal}, function(data) {
       $scope.artists = data.artists.items;
        //TODO: Make request not break when whitespace
      });
    });
  });
