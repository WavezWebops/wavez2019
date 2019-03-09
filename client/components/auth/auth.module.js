'use strict';

angular.module('wavez2017App.auth', ['wavez2017App.constants', 'wavez2017App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
