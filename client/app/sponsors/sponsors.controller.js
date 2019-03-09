'use strict';

(function(){

class SponsorsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('sponsors', {
    templateUrl: 'app/sponsors/sponsors.html',
    controller: SponsorsComponent,
    controllerAs: 'sponsorsCtrl'
  });

})();
