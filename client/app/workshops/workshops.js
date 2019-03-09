'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('workshops', {
        url: '/workshops',
        template: '<workshops></workshops>'
      });
  });
