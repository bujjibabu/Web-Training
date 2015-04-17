'use strict';

/**
 * @ngdoc function
 * @name angularprojApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularprojApp
 */
angular.module('angularprojApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
