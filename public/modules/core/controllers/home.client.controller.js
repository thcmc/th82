'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;

    /*$scope.employers = [
          {
          	name: 'Creative Monster Consulting LLC',
           location: 'Pittsburgh',
           dates:'June 2011 – Present',
           url: 'http://bit.ly/1jYjVM2',
           img: 'public/modules/core/img/GE.jpg',
           desc: 'Building of RESTful singe page applications using Node.js, Angular.js, Express, and MongoDB'
       },
          {
          	name: 'Dicks Sporting Goods Corporation',
           location: 'Pittsburgh',
           dates:'January 2012 – April 2013',
           url: 'http://bit.ly/1ioTPMF',
           img: '../img/GE.jpg',
           desc: 'Profit consulting for Lodge Merchandising unit, under the FP&A corporate function'
       },
          {
          	name: 'Education Management Corporation',
           location: 'Pittsburgh',
           dates:'June 2010 – December 2011',
           url: 'http://bit.ly/1mApy1C',
           img: '../img/GE.jpg',
           desc: 'Forecasting, modeling, analysis, earnings reporting, and planning at the corporate level'
       },
          {
          	name: 'Gexpro Corporation',
           location:'Shelton, CT',
           dates:'August 2009 – May 2010',
           url: 'http://bit.ly/1wgx72y',
           img: '../img/GE.jpg',
           desc: 'Supply chain finance, P&L statement analysis and management for corporate functions, accounting'
       },
          {
          	name: 'General Electric Corporation',
           location:'various - CT, TX, IL',
           dates:'July 2007 – July 2009',
           url: 'http://invent.ge/1kcraKm',
           img: 'http://localhost:3000/public/modules/core/img/GE.jpg',
           desc: '2-year post-grad program encompassing in-field training, classroom work, testing, and presentation grading'
       },
          {
          	name: 'Aviva Life Corporation',
           location:'Quincy, MA',
           dates:'June 2006 – January 2007',
           url: 'http://bit.ly/TRa5kz',
           img: '../img/bg1.jpg',
           desc: 'Finance co-op through Northeastern University. Helped finance division decipher structured finance products and contractual agreements'
       }
        ];*/
}]);