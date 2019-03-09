'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/events/:id',
        template: '<event></event>'
      });
  });
