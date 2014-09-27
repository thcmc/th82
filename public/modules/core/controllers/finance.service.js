'use strict';

angular.module('core')
  .service('financeService', function () {
    this.getMeanStuff = function () {
      return ([
        {
          title: 'Performance Profile',
          desc1: 'Senior financial analyst experienced in delivering efficient operational financial management for multinational and domestic Fortune 500 companies through high-impact business analysis, strategic planning, financial modeling, and accounting.',
          desc2: 'Small business operator providing business intelligence, technology, and advisory services for community-based businesses and non-profit organizations.',
          desc3: 'Community resource helping local athletes with hockey skill development, coaching, and mentoring.',
          desc4: '',
          url: 'http://www.#.org'
        },
        {
          title: 'Core Competencies',
          desc1: 'Planning, budgeting, and forecasting activities | Resource allocation | Driving standardization | Process Improvement | Variance Analysis | Flash reporting | Internal and External reporting | Financial modeling | Preparation of Quarterly Earnings | Month-end closing | Compare and contrast business performance | P&amp;L oversight | Financial presentations',
          desc2: '',
          desc3: '',
          desc4: '',
          url: 'http://#.com'
        }
      ]);
    };
    this.getExperienceStuff = function () {
      return ([
        {
          workname: 'Creative Monster Consulting',
          workdates: '2011-Present',
          worktype: 'Entreprenurial startup;  Business Management, IT Consulting;  Digital + Print Advertising;  Outsourcing; Independent Business Finances and Ops;',
          workdesc: 'Revenue Growth, Business Management, Web Technology, Advertising, '
        },
        {
          workname: 'Catholic Youth Association',
          workdates: '2012-Present',
          worktype: 'Data Process Setup; Data Analysis; Reporting; Multiple Professional Websites with Drupal content managment systems;',
          workdesc: 'Data collection endpoint setup; Data Analysis; External reporting (United Way); Multiple professional websites with Drupal content management system;'
        },
        {
          workname: 'East End Eatz',
          workdates: '2014-Present',
          worktype: 'Professional Website; Content Management Application back-end;  Custom graphic design;  Social media set-up and training;  Growth advisory',
          workdesc: 'tech setup including nodejs and angularjs, facebook pages, social media marketing strategies'
        },
        {
          workname: 'Albert\'s Lounge',
          workdates: '2014',
          worktype: 'Professional website; Advertising; Graphic Design',
          workdesc: ''
        },
        {
          workname: 'G.A.S.S. Hockey',
          workdates: '2013',
          worktype: 'Professional website; Advertising; Assisting On-ice instruction',
          workdesc: ''
        },
        {
          workname: 'Upstairs Audio',
          workdates: '2012',
          worktype: 'Wordpress CMS set-up and training; Custom graphic design; Technology Training',
          workdesc: ''
        }
      ]);
    };
    this.getCorporateStuff = function () {
      return ([
        {
          workname: 'Dick\'s Sporting Goods',
          workdates: '2012-2013',
          worktitle: 'Senior Financial Analyst',
          workdept: 'Forecasting Planning & Analysis',
          workdesc: ''
        },
        {
          workname: 'Education Management Corp.',
          workdates: '2010-2012',
          worktitle: 'Senior Financial Analyst',
          workdept: 'Forecasting Planning & Analysis',
          workdesc: ''
        },
        {
          workname: 'General Electric / Gexpro',
          workdates: '2007-2010',
          worktitle: 'Financial Analyst / Management Trainee',
          workdept: 'Financial Management Program',
          workdesc: ''
        },  
        {
          workname: 'Aviva Insurance',
          workdates: '2006-2007',
          worktitle: 'Finance Co-op / Intern',
          workdept: 'Structured Settlements',
          workdesc: ''
        }
      ]);
    };
    this.getTechnicalStuff = function () {
      return ([
        {
         category: 'Office',
         skill: 'Microsoft Office \'03-\'14: Word, Excel, Outlook, PowerPoint, Sharepoint, MS Visio | Hyperion (Essbase) | SAP | Cognos | Business Objects | Oracle' 
        },
        {
         category: 'Web Programming',
         skill: 'HTML5 | CSS3 | Node.JS | Angular.JS | Express | MongoDB' 
        },
        {
         category: 'Creative',
         skill: 'Adobe CS5.5 -  Fireworks | Photoshop | After Effects | Audition' 
        },
        {
         category: 'Productivity',
         skill: 'Podio | Trello | MindMeister | RescueTime' 
        }
      ]);
    };
    this.getEducationStuff = function () {
      return ([
        {
         institution: 'General Electric / Gexpro, Shelton CT',
         dates: '2007-2009',
         desc1: '2-year post-graduate certificate program (testing, presentations, & on-site finance assignments)',
         desc2: '-',
         desc3: '-'
        },
        {
         institution: 'Northeastern University, Boston MA',
         dates: '2002-2007',
         desc1: 'B.S. Finance and Investments; Accounting',
         desc2: '4-year Athletic Scholarship, Men\'s Varsity Hockey 2002-2006 (NCAA D-1)',
         desc3: 'Participating founder of Varsity Squash program 2005-2007'
        }
      ]);
    };
    // this.getOngoingStuff = function () {
    //   return ([
    //     {
    //      institution: '',
    //      dates: '',
    //      desc: '' 
    //     },
    //     {
    //      institution: '',
    //      dates: '',
    //      desc: '' 
    //     }
    //   ]);
    // };
    this.getExtracurricularStuff = function () {
      return ([
        {
          title: 'Extracurricular Interests',
          desc: 'Hockey | Squash Racquets (Singles/Doubles) | Biking | Hiking | Travel | Swimming | Skiing | Web Development | Investments | Economic and Trade Policy news'
        }
      ]);
    };
  });




    