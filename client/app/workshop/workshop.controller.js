'use strict';

(function(){

class WorkshopComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 1;
    this.workshops = [{
    	'name': 'ML WORKSHOP',
    	'writeup': ['Ever wondered how google translate and Alexa works. Do you know how Gmail classifies a mail as spam? Here we come ,at the right moment with the basics of machine learning workshop.  Come join us as we give the start that you are looking for in the journey towards AI.'],
//      'rules': ['A team of size 4-5 members can participate.', 'The team members can be from different colleges.', 'Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/nilaygautam2007/image/upload/v1520529023/roborev_PS_zkqa9x.pdf" target="_blank">Click Here</a>).'],
//      'prize': ['First prize: 4k', 'Second Prize: 3k'],
    	'contacts': [{
    		'name': 'Manoranjan',
    		'mobile': '+91 960 066 8340',
//    		'email': 'events@wavez.org'
    	}]
    },
    {
    	'name': 'ROBOREVOLUTION',
    	'writeup': ['Does above "Water Line" seem boring to you? Do you have the guts and enthu to explore the underwater? What if you get a chance to make your own AUV!! Presenting ROBOREVOLUTION workshop and competition at WAVEZ which includes both manual robotics as well as automation. So get ready to DIVE IN and explore the Underwaterz!!'],
//    	'rules': ['Online Event.'],
//    	'prize': ['Prize pool 2.5k'],
      'contacts': [{
    		'name': 'Manoranjan',
    		'mobile': '+91 960 066 8340',
//    		'email': 'events@wavez.org'
    	}]
    },
    {
    	'name': 'MOBOPS WORKSHOP',
      'writeup': ['Mobile android app development workshop using Android studio. You will start an exciting app development journey and at the end of the session you will be able to make your own basic calculator app.'],
    	// 'rules': ["To be announced"],
    	// 'prize': 'TBA',
    	'contacts': [{
    		'name': 'Manoranjan',
    		'mobile': '+91 960 066 8340',
//    		'email': 'events@wavez.org'
    	}]
    },
  ];
    this.workshop = {};
  }

  $onInit() {
  	this.workshop = this.workshops[this.$stateParams.id];
  }
}

angular.module('wavez2017App')
  .component('workshop', {
    templateUrl: 'app/workshop/workshop.html',
    controller: WorkshopComponent,
    controllerAs: 'workshopCtrl'
  });

})();
