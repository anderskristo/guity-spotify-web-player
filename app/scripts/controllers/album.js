'use strict';

angular.module('guityApp')
  .controller('AlbumCtrl', function ($scope, $routeParams, guityAPI, Auth) {
    $scope.album = $routeParams.album;
    guityAPI.getAlbum($scope.album).then(function (album) {
      $scope.album = album;
    });
  });
