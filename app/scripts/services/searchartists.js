'use strict';

angular.module('guityApp')
  .factory('searchArtists', function ($resource) {
    return $resource('https://api.spotify.com/v1/search?q=:artists&type=artist', {}, {
      query: {
        method: 'GET',
        isArray: false
      }
    });
  });
