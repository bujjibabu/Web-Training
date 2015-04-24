'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('loginCtrl', function ($scope) {
   $scope.fnLogin  = function(){
   	 $scope.loginObj = {username:$scope.use,password:$scope.pass};
   	 console.log($scope.loginObj);
   }
  });
