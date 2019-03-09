'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sponsors', {
        url: '/sponsors',
        template: '<sponsors></sponsors>'
      });
  });
