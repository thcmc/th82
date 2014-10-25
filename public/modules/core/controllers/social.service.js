'use strict';

angular.module('core')
  .service('socialService', function () {
    this.getSocialMedia = function () {
      return ([
        {
          name: 'Facebook',
          linktype: 'href',
          url: 'https://www.facebook.com/theneroty',
          icon: 'fa fa-facebook fa-2x'
        },
        {
          name: 'LinkedIn',
          linktype: 'href',
          url: 'https://www.linkedin.com/in/timheneroty',
          icon: 'fa fa-linkedin fa-2x'
        },
        {
          name: 'Email',
          linktype: 'href',
          url: 'mailto:th@creativemonsterconsulting.com',
          icon: 'fa fa-envelope fa-2x'
        },
        {
          name: 'Telephone',
          linktype: 'href',
          url: 'tel:+14124478555',
          icon: 'fa fa-phone fa-2x'
        },
        {
          name: 'YouTube',
          linktype: 'href',
          url: 'https://www.youtube.com/channel/UCd07uVM2XDcVHLcZGPfTusg',
          icon: 'fa fa-youtube fa-2x'
        },
        {
          name: 'Twitter',
          linktype: 'href',
          url: 'https://twitter.com/timhene',
          icon: 'fa fa-twitter fa-2x'
        }
      ]);
    };
  });




    