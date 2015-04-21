'use strict';

/**
 * @ngdoc overview
 * @name contactproApp
 * @description
 * # contactproApp
 *
 * Main module of the application.
 */
angular
  .module('contactproApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/CONTACT US', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/CONTACT US'
      });
  });
