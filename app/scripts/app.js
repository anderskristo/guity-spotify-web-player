'use strict';

angular
  .module('guityApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'spotify'
  ])
  .config(function ($routeProvider, $locationProvider, SpotifyProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artist/:id', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    SpotifyProvider.setClientId('2e9081bb70bb40538a16c015c3db8d48');
    SpotifyProvider.setRedirectUri('http://127.0.0.1:9000/callback.html');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  })
  .controller('AppCtrl', function ($scope, Spotify, $location) {
    console.log('appcontroller');
    console.log(location);
    // TODO: Controls for if logged in or not

    function checkUser() {
      Spotify.getMe().then(function(userInfo) {
        console.log('heh');
      })
    }

    window.addEventListener('message', function(event) {
      console.log('message: ', event);
      var hash = event.data;
      console.log(hash)

      console.log(Spotify.setAccessToken());

    }, false);



  });