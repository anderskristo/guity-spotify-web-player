'use strict';

angular.module('guityApp')
  .factory('guityAPI', function (Auth, $q, $http) {
    var baseUrl = 'https://api.spotify.com/v1';
    return {

      getCurrentUser: function () {
        var ret = $q.defer();
        $http.get(baseUrl + '/me', {
          headers: {
            'Authorization': 'Bearer ' + Auth.getAccessToken()
          }
        }).success(function (r) {
          console.log('got user', r);
          ret.resolve(r);
        }).error(function (err) {
          console.log('failed to get user', err);
          ret.reject(err);
        });
        return ret.promise;
      },

      getArtist: function (artistid) {
        var ret = $q.defer();
        $http.get(baseUrl + '/artists/' + encodeURIComponent(artistid), {
          headers: {
            'Authorization': 'Bearer ' + Auth.getAccessToken()
          }
        }).success(function (r) {
          console.log('got artist ...', r);
          ret.resolve(r);
        });
        return ret.promise;
      },

      getAlbum: function (albumid) {
        var ret = $q.defer();
        $http.get(baseUrl + '/albums/' + encodeURIComponent(albumid), {
          headers: {
            'Authorization': 'Bearer ' + Auth.getAccessToken()
          }
        }).success(function (r) {
          console.log('got album ...', r);
          ret.resolve(r);
        });
        return ret.promise;
      },

      getPlaylist: function (username, playlist) {
        var ret = $q.defer();
        $http.get(baseUrl + '/users/' + encodeURIComponent(username) + '/playlists/' + encodeURIComponent(playlist), {
          headers: {
            'Authorization': 'Bearer ' + Auth.getAccessToken()
          }
        }).success(function (r) {
          console.log('got playlist ...' + r)
          ret.resolve(r);
        });
        return ret.promise;
      },

      getSearch: function (q, type, options) {
        var ret = $q.defer();
        options = options || {};
        options.q = q;
        options.type = type;
        $http.get(baseUrl + '/search?type=' + options.type + '&q=' + options.q, {

        }).success(function(r) {
          console.log('got search results ...');
          ret.resolve(r);
        });
        return ret.promise;
      }

    }
  });
