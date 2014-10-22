'use strict';

angular.module('guityApp')
  .directive('searchresults', function () {
    return {
      templateUrl: 'views/directives/searchResults.html',
      restrict: 'E'      
    };
  });
