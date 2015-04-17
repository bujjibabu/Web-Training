'use strict';

/**
 * @ngdoc function
 * @name angularprojApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularprojApp
 */
angular.module('angularprojApp')
  .controller('headerCtrl', function ($scope,$location) {
     $scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active-menu-item"
	    } else {
	      return ""
	    }
	}
  });