'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        template: '<events></events>'
      });
  });
