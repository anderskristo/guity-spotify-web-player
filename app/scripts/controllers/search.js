'use strict';

angular.module('guityApp')
  .controller('SearchCtrl', function ($scope, $location, guityAPI) {

    //TODO: Should be better both style and code.
    //TODO: If click elsewhere but the result page, then close it.
    $scope.showSearch = false;
    $scope.$watch('searchField', function(newVal) {
      if (newVal) {
        jQuery('.search-artist').css('position', 'absolute')        
        guityAPI.getSearch(newVal, 'track').then(function (data) {
          $scope.results = data.tracks.items;
          console.log($scope.results)
        });
        $scope.showSearch = true;
        $scope.hideSearch = function () {
          $scope.showSearch = false;
        }
      } else {
        jQuery('.search-artist').css('position', 'relative')
        $scope.artist = [];
        $scope.showSearch = false;
      }
    });
  });
