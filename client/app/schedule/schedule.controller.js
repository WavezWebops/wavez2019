'use strict';

(function(){

class ScheduleComponent {
  constructor() {
    this.day1 = [{
    	title: 'investigation case',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488287165/Wavez2017/events/openhouse.png',
    	time: 'Whole day1',
    	url: '/events/1'
    }, {
    	title: 'Splash',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488220721/Wavez2017/events/splash.png',
    	time: '1:00 PM-2:30 PM',
    	url: '/events/2'
    },  {
    	title: 'RC Boats',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735141/Wavez2017/events/rcboats.png',
    	time: '10:00 AM-01:00 PM',
    	url: '/events/3'
    },  {
    	title: 'Stability session',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488603401/Wavez2017/workshops/starccm.png',
    	time: '9:00 PM-10:00 PM',
    	url: '/workshop/0'
    }, {
    	title: 'Quizathon',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735147/Wavez2017/events/fss.png',
    	time: '3:00 PM-4:30 PM',
    	url: '/events/4'
    }];

    this.day2 = [{
        title: 'Robo revolution event',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735143/Wavez2017/events/awc.png',
        time: '3:30PM-5:00PM',
        url: '/events/5'
    }, {
        title: 'Gamedrone',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735141/Wavez2017/events/quiz.png',
        time: '1:00 PM-3:00 PM',
        url: '/events/6'
    }, {
        title: 'Web development workshop',
        img: null,
        time: '1:00PM-3:30PM',
        url: '/workshop/1'
    },
    {
        title:'Robo revolution workshop',
        img: null,
        time: '3:00 PM-5:00 PM',
        url:'/workshop/3'
    }
    
         
    ];
  }
}

angular.module('wavez2017App')
  .component('schedule', {
    templateUrl: 'app/schedule/schedule.html',
    controller: ScheduleComponent,
    controllerAs: 'scheduleCtrl'
  });

})();
