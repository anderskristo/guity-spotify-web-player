'use strict';

angular.module('guityApp')
  .controller('UserCtrl', function ($scope, $routeParams, $location, guityAPI) {
    $location.replace();
    guityAPI.getCurrentUser().then(function (user) {
      $scope.user = user;
    });

  });
