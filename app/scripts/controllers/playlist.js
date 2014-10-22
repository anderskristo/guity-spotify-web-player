'use strict';

angular.module('guityApp')
  .controller('PlaylistCtrl', function ($scope, guityAPI, Auth, $routeParams) {
    $scope.username = Auth.getUserName();
    $scope.playlist = $routeParams.playlist;
    $scope.playlists = [];


    //TODO: This should be moved to a "Global player controller"
    guityAPI.getPlaylist($scope.username, $scope.playlists).then(function (list) {
      console.log('got playlist', list);
      $scope.name = list.name;
      $scope.data = list;
      $scope.playlists = list.items.map(function (pl) {
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

    guityAPI.getPlaylistTracks($scope.username, $scope.playlist).then(function (list) {
      $scope.tracks = list.items;
    });

  });
