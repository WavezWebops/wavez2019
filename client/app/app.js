'use strict';

angular.module('wavez2017App', ['wavez2017App.auth', 'wavez2017App.admin', 'wavez2017App.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope) {
  	$rootScope.loading = true;
  });
