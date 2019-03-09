'use strict';

(function(){

class HospitalityComponent {
  constructor() {
  //   this.workshops = [
  //     {
  //   	'name': 'RoboRevolution',
  //   	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488603401/Wavez2017/workshops/starccm.png'
  //   },
  //   {
  //   'name': 'Web Development',
  //   'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1520627965/Mean_bylwwj.jpg'
  // },
  //
  // ];
  }
}

angular.module('wavez2017App')
  .component('hospitality', {
    templateUrl: 'app/hospitality/hospitality.html',
    controller: HospitalityComponent,
    controllerAs: 'hospitalityCtrl'
  });

})();
