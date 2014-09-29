'use strict';

angular.module('core')
  .service('webService', function () {
    this.getWebsiteStuff = function () {
      return ([
        {
          address: 'www.albertslounge.com',
          url: 'http://www.albertslounge.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-alberts.png'
        },
        {
          address: 'www.eastendeatz.com',
          url: 'http://www.eastendeatz.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-eee.png'
        },
        {
          address: 'www.creativemonsterconsulting.com',
          url: 'http://www.creativemonsterconsulting.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-cmc.png'
        },
        {
          address: 'www.catholicyouthassociation.com',
          url: 'http://www.catholicyouthassociation.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-cyahomepage.png'
        },
        {
          address: 'www.gasshockey.com',
          url: 'http://www.gasshockey.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-gass.png'
        },
        {
          address: 'www.upstairsaudio.com',
          url: 'http://www.upstairsaudio.com',
          screenshotimg: 'modules/core/img/portfolio/screenshot-ua.png'
        }
      ]);
    };
  });




    