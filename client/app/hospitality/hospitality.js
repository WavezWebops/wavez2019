'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hospitality', {
        url: '/hospitality',
        template: '<hospitality></hospitality>'
      });
  });
