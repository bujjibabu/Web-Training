'use strict';

/**
 * @ngdoc function
 * @name angularprojApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularprojApp
 */
angular.module('angularprojApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
