'use strict';

angular.module('guityApp')
  .factory('Auth', function Auth() {
    var client_id = '2e9081bb70bb40538a16c015c3db8d48',
      redirect_uri = 'http://127.0.0.1:9000/callback.html';

    function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + client_id
        + '&redirect_uri=' + encodeURIComponent(redirect_uri)
        + '&scope=' + encodeURIComponent(scopes.join(' '))
        + '&response_type=token';
    }

    return {
      doLogin: function () {
        var url = getLoginURL([
          'user-read-private',
          'playlist-read-private',
          'playlist-modify-public',
          'playlist-modify-private',
          'user-library-read',
          'user-library-modify'
        ]);
        var sl = window.open(url, 'Spotify', 'WIDTH=400,HEIGHT=600');
      },

      getAccessToken: function () {
        var expires = 0 + localStorage.getItem('gu_expires', '0');
        if ((new Date()).getTime() > expires) {
          return '';
        }
        var token = localStorage.getItem('gu_token', '');
        return token;
      },

      setAccessToken: function (token, expires_in) {
        localStorage.setItem('gu_token', token);
        localStorage.setItem('gu_expires', (new Date()).getTime() + expires_in);
      },

      getUserName: function () {
        var username = localStorage.getItem('gu_username', '');
        return username;
      },

      setUserName: function(username) {
        localStorage.setItem('gu_username', username);
      },

      getUserCountry: function () {
        var userCountry = localStorage.getItem('gu_country', '');
        return userCountry;
      },

      setUserCountry: function (userCountry) {
        localStorage.setItem('gu_country', userCountry);
      }

    }
  });
