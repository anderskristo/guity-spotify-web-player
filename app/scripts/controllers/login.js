'use strict';

angular.module('guityApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.isLoggedIn = false;
    $scope.login = function () {
      console.log('login you fool ...');
      Auth.doLogin();
    };
  });
