'use strict';

class NavbarController {
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.icons = [
      {
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735025/Wavez2017/fb.png',
    	'url': 'https://www.facebook.com/Wavez.iitm'
    },
    {
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735026/Wavez2017/iitm.png',
    	'url': 'https://www.iitm.ac.in/'
    }, {
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735025/Wavez2017/doe.png',
    	'url': 'http://www.doe.iitm.ac.in/'
    }];
    this.events = [
    {
    	'name': 'INVESTIGATION CASE'
    },
  {
    	'name': 'GAMEDROME'
    },
  {
    	'name': 'R C BOATS'
    },
    {
    	'name': 'QUIZATHON'
    }, {
        'name': 'DAILY EVENTS'
    },  {
        'name': 'DEBATE'
    },
    ];
    this.workshops = [{
        'name': 'ML WORKSHOP'
    },
    {
        'name': 'ROBOREVOLUTION'
    },
    {
      'name': 'MOBOPS WORKSHOP'
  } 
  ];
  }

}

angular.module('wavez2017App')
  .controller('NavbarController', NavbarController);
