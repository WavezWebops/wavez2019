'use strict';

class SettingsController {
  constructor(Auth, $http, $state) {
    this.$state = $state;
    this.$http = $http;
    this.Auth = Auth;
    this.getCurrentUser = Auth.getCurrentUser;
    this.events = [
      {
        id: 'investigation',
        name: 'Investigation Case',
        url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735144/Wavez2017/events/treasure.png',
  //      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
        active: false
      },
      {
        id: 'gamedrome',
        name: 'Game Drome',
        url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488287166/Wavez2017/events/gamedrome.png',
  //      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
        active: false
      },
      {
        id: 'rcboats',
        name: 'R C Boats',
        url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735143/Wavez2017/events/roboceana.png',
  //      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
        active: false
      },
      {
        id: 'quiz',
        name: 'Quizathon',
        url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735141/Wavez2017/events/quiz.png',
  //      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
        active: false
      },
      {
      id: 'debate',
      name: 'Debate',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488220721/Wavez2017/events/splash.png',
//      instructions: ['Go through the rules carefully.', '<strong>All the team members must register.</strong>'],
      active: false
    },
  ];
    this.workshops = [
      {
        id: 'mlwork',
        name: 'ML Workshop',
        url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488603401/Wavez2017/workshops/starccm.png',
  //      instructions: ['Go through the rules carefully.', '<strong>All the team members must register.</strong>', 'Kit cost per team- 3200', 'Team description paper will be updated soon. Every team must fill and send back back to us on events@wavez.org .', 'All the member must pay the registration fee.'],
        active: false
      },
      {
      id: 'roborevw',
      name: 'RoboRevolution',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488603401/Wavez2017/workshops/starccm.png',
//      instructions: ['Go through the rules carefully.', '<strong>All the team members must register.</strong>', 'Kit cost per team- 3200', 'Team description paper will be updated soon. Every team must fill and send back back to us on events@wavez.org .', 'All the member must pay the registration fee.'],
      active: false
    },
//    {
//      id: 'webdevw',
//      name: 'Web Development Workshop',
//      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488603401/Wavez2017/workshops/starccm.png',
//      instructions: ['Go through the rules carefully.','Bring your laptops for the workshop', 'Registration Fee - Rs. 300'],
//      active: false
//    },
    {
      id: 'mobwork',
      name: 'MobOps Workshop',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488603401/Wavez2017/workshops/starccm.png',
    //      instructions: ['Go through the rules carefully.', '<strong>All the team members must register.</strong>', 'Kit cost per team- 3200', 'Team description paper will be updated soon. Every team must fill and send back back to us on events@wavez.org .', 'All the member must pay the registration fee.'],
      active: false
    },
  ];
    this.User = this.getCurrentUser();
    this.Init();

  }

  Eregister(event) {
    this.$http.post('/api/registrations', {
      event: event.id
    })
    .then(response => {
      this.User.events.push(event.id);
      Materialize.toast('Registration Requested!', 2000);
      this.Init();
    })
    .catch(err => {
      Materialize.toast('Something went wrong!', 2000);
    });
  }

  Init() {
    this.User = this.getCurrentUser();
    for(var i=0; i<this.User.events.length; ++i) {
      for(var j=0; j<this.events.length; ++j) {
        if(this.User.events[i]==this.events[j].id)
          this.events[j].active = true;
      }
      for(var k=0; k<this.workshops.length; ++k) {
        if(this.User.events[i]==this.workshops[k].id)
          this.workshops[k].active = true;
      }
    }
  }
}

angular.module('wavez2017App')
  .controller('SettingsController', SettingsController);
