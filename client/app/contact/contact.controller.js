'use strict';

(function(){

class ContactComponent {
  constructor() {
    this.cores = [ {
    	'name': 'DEEPAK KUMAR',
    	'department': 'Head',
    	'mobile': '+91 917 605 0669',
/*    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1517778719/Surendra_wh8nps.jpg',
    	'mail': 'contact@wavez.org'*/
    }, /*{
    	'name': 'Vamsi',
    	'department': 'Head',
      'mobile': '+91 967 720 8885',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1518559624/20180208_093102_huqe9l.jpg',
    	'mail': 'contact@wavez.org'
    }, {
    	'name': 'Santosh',
    	'department': 'Sponsorships',
    	'mobile': '+91 994 011 5329',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1519346823/pp_wybsiv.jpg',
    	'mail': 'spons@wavez.org'
    },{
    	'name': 'Yash J Yadav',
    	'department': 'Sponsorships',
    	'mobile': '+91 996 973 8551',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1519365311/IMG_6785_shhe8q.jpg',
    	'mail': 'spons@wavez.org'
    },{
    	'name': 'Rishitha',
    	'department': 'QMS',
    	'mobile': '+91 994 150 9706',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1517778736/Rishitha_QMS_Manager_bzdi9l.jpg',
    	'mail': 'contact@wavez.org'
    },{
        'name': 'Deepak Kumar',
        'department': 'Events',
        'mobile': '+91 917 605 0669',
        'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/q_auto:eco/v1518559619/IMG_20180131_171323_Bokeh_vmjvsn.jpg',
        'mail': 'events@wavez.org'
    }, {
    	'name': 'Mudit Maheshwari',
    	'department': 'Finance & Sports',
    	'mobile': '+91 988 418 3888',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1517778719/Mudit_Finance___Sports_Manager_lw3qyt.jpg',
    	'mail': 'finance@wavez.org'
    },  {
        'name': 'Vinay',
        'department': 'FR',
        'mobile': '+91 949 154 7687',
        'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1518587649/IMG-20180214-WA0003_kbqt3o.jpg',
        'mail': 'contact@wavez.org'
    }, {
        'name': 'Varaprasad',
        'department': 'FR',
        'mobile': '+91 958 195 9819',
        'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1517778718/2017-11-10_19356_mtcpob.jpg',
        'mail': 'contact@wavez.org'
    },
    // {
    //     'name': 'Anand',
    //     'department': 'Sports & Security',
    //     'mobile': '+91 897 817 8382',
    //     'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1487735100/Wavez2017/core/sports.jpg',
    //     'mail': 'contact@wavez.org'
    // },
    {
    	'name': 'Rohith Raj',
    	'department': 'Design & Publicity',
    	'mobile': '+91 949 085 2469',
    	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/v1519364925/pp-2_cetfik.jpg',
    	'mail': 'contact@wavez.org'
    },   {
      	'name': 'Nilay Gautam',
      	'department': 'WebOps',
      	'mobile': '+91 950 019 3273',
      	'url': 'https://res.cloudinary.com/nilaygautam2007/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1517778718/front_Nilay-Gautam_jk7ecb.jpg',
      	'mail': 'nilay@wavez.org'
      }*/
  ];
  }
}

angular.module('wavez2017App')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  });

})();
