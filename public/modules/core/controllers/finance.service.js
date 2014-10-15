'use strict';

angular.module('core')
  .service('financeService', function () {
    this.getMeanStuff = function () {
      return ([
        {
          title: 'Performance Profile',
          desc1: 'Senior financial analyst experienced in delivering efficient operational financial management through high-impact business analysis, strategic planning, financial modeling, and accounting.',
          desc2: 'Small business operator providing business intelligence, technology, and advisory services for community-based businesses and nonprofits.',
          desc3: '',
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
          worktype: 'IT & Business Management Consulting',
          workdesc: ''
        },
        {
          workname: 'Catholic Youth Association',
          workdates: '2011-Present',
          worktype: 'Data Processes, Financial & Business Analysis, Internal/External Reporting, IT Consulting, Digital & Print Advertising, Social Media Management, Web Development',
          workdesc: ''
        },
        {
          workname: 'East End Eatz',
          workdates: '2014-Present',
          worktype: 'Application Development, Digital & Print Advertising, Content Development,  Graphic design,  Social media Management, Business Advisory',
          workdesc: ''
        },
        {
          workname: 'Albert\'s Lounge',
          workdates: '2014',
          worktype: 'Web Development, Content Development, Social Media Management, Business Advisory',
          workdesc: ''
        },
        {
          workname: 'G.A.S.S. Hockey',
          workdates: '2013',
          worktype: 'Hockey Instruction, Web Development, Content Development, Print & Digital Advertising',
          workdesc: ''
        },
        {
          workname: 'Upstairs Audio',
          workdates: '2012',
          worktype: 'Graphic Design,  Wordpress Training',
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
          workdept: 'Financial Management Program (FMP) / Distribution Finance Leadership Program (DFLP)',
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
         name: 'General Electric / Gexpro | CT, IL, TX',
         timeframe: '2007-2009',
         desc1: '2-year post-graduate certificate program (testing, presentations, & on-site finance assignments)',
         desc2: '',
         desc3: ''
        },
        {
         name: 'Northeastern University | Boston, MA',
         timeframe: '2002-2007',
         desc1: 'B.S. Finance and Investments; Accounting',
         desc2: '-  4-year Athletic Scholarship, Men\'s Varsity Hockey 2002-2006 (NCAA D-1)',
         desc3: '-  Participating founder of Varsity Squash program 2005-2007'
        }
      ]);
    };
    this.getExtracurricularStuff = function () {
      return ([
        {
          title: 'Extracurricular Interests',
          desc: 'Hockey | Squash Racquets (Singles/Doubles) | Biking | Hiking | Travel | Swimming | Skiing | Web Development | Investments | Economic and Trade Policy news'
        }
      ]);
    };
  });




    