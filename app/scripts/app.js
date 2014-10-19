'use strict';

angular
  .module('guityApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artist/:artist', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .when('/user/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/album/:album', {
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl'
      })
      .when('/playlist', {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope, $location, guityAPI, Auth) {

    function checkUser() {
      guityAPI.getCurrentUser().then(function (user) {
        Auth.setUserName(user.id);
        Auth.setUserCountry(user.country);
        console.log(user);
        console.log('we are in ...');
        $scope.$emit('login');
        $location.replace();
      }, function (err) {
        console.log('error ...');
        $scope.showLogin = true;
        $location.replace();
      });
    }

    $scope.username = Auth.getUserName();
    $scope.userCountry = Auth.getUserCountry();

    $scope.isLoggedIn = (Auth.getAccessToken() !== '');
    $scope.showGuity = $scope.isLoggedIn;
    $scope.showLogin = !$scope.isLoggedIn;

    $scope.$on('login', function () {
      $scope.showGuity = true;
      $scope.showLogin = false;
    });

    $scope.$on('logout', function () {
      $scope.showGuity = false;
      $scope.showLogin = true;
    });

    $scope.logout = function () {
      console.log('Leaving ...');
      Auth.setUserName('');
      Auth.setAccessToken('', 0);
      $scope.$emit('logout');
    };

    window.addEventListener("message", function (event) {
      console.log('got postmessage', event);
      var hash = JSON.parse(event.data);
      if (hash.type === 'access_token') {
        Auth.setAccessToken(hash.access_token, hash.expires_in || 60);
        checkUser();
      }
    }, false);

  });