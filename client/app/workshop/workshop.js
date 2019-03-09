'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('workshop', {
        url: '/workshop/:id',
        template: '<workshop></workshop>'
      });
  });
