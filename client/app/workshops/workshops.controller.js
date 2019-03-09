'use strict';

(function(){

class WorkshopsComponent {
  constructor() {
    this.workshops = [
      {
        'name': 'ML Workshop',
       'url': 'https://res.cloudinary.com/shahrishabh/image/upload/v1551594091/comingsoon.png'
      },  
      {
        'name': 'RoboRevolution',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/roboceana.png'
      },  
//      {
//    	'name': 'RoboRevolution',
//    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488603401/Wavez2017/workshops/starccm.png'
//    },
    {
    'name': 'MobOps Workshop',
    'url': 'https://res.cloudinary.com/shahrishabh/image/upload/v1551594091/comingsoon.png'
  },
  ];
  }
}

angular.module('wavez2017App')
  .component('workshops', {
    templateUrl: 'app/workshops/workshops.html',
    controller: WorkshopsComponent,
    controllerAs: 'workshopsCtrl'
  });

})();
