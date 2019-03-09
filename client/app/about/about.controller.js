'use strict';

(function(){

class AboutComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent,
    controllerAs: 'aboutCtrl'
  });

})();
