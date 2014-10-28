'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, $location, guityAPI) {

    //TODO: Should be better both style and code.
    //TODO: If click elsewhere but the result page, then close it.
    $scope.showSearch = false;
    $scope.$watch('searchField', function(newVal) {
      if (newVal) {
        guityAPI.getSearch(newVal).then(function (data) {
          $scope.results = data.tracks.items;
          console.log($scope.results)
          var artists = [],
              albums = [];
          angular.forEach($scope.results, function(result) {
            artists.push(result.artists[0])
            albums.push(result.album)
          }, artists, albums);
          $scope.artists = artists;
          $scope.albums = albums;
        });
        $scope.showSearch = true;
        $scope.hideSearch = function () {
          $scope.showSearch = false;
        }
      } else {
        $scope.artist = [];
        $scope.showSearch = false;
      }
    });
  });
