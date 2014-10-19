'use strict';

angular.module('guityApp')
  .controller('PlaylistCtrl', function ($scope, guityAPI, Auth, $routeParams) {
    $scope.username = Auth.getUserName();
    $scope.playlists = [];

    guityAPI.getPlaylist($scope.username, $scope.playlists).then(function(list) {
      console.log('got playlist', list);
      $scope.name = list.name;
      $scope.data = list;
      $scope.playlists = list.items.map(function(pl) {
        return {
          id: pl.id,
          name: pl.name,
          uri: pl.uri,
          username: pl.owner.id,
          collaborative: pl.collaborative,
          'public': pl['public']
        };
      });
    });
  });
