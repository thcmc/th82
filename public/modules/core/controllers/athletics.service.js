'use strict';

angular.module('core')
  .service('athleticsService', function () {
    this.getHockeyCoachingAffiliates = function () {
      return ([
        {
          name: 'Independent Goalie Instruction',
          timeframe: '2000 - Present',
          league: '',
          level: '',
          city: '',
          role: '',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Pittsburgh Penguins Elite AAA U18',
          timeframe: '2011 - Present',
          league: 'T1EHL',
          level: 'AAA',
          city: 'Pittsburgh',
          role: 'Assistant Coach / Goalie Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Penguins Select AAA - Mite, Atom, Squirt',
          timeframe: '2014',
          league: '',
          level: 'AAA',
          city: 'Pittsburgh',
          role: 'Associate Coach',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'G.A.S.S. Hockey',
          timeframe: '2012 - Present',
          league: '',
          level: '',
          city: 'Castle Shannon, PA',
          role: 'Goalie Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Shane Clifford Hockey Schools',
          timeframe: '1998 - Present',
          league: '',
          level: '',
          city: '',
          role: 'Senior Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'The Next Level (Warrendale, PA)',
          timeframe: '2000-2005',
          league: '',
          level: '',
          city: 'Warrendale, PA',
          role: 'Senior Instructor / Goalie Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'AAA Goaltending',
          timeframe: '2001-2004',
          league: '',
          level: '',
          city: 'Costa Mesa, CA',
          role: 'Senior Goaltending Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Rick Heinz Goalie Schools',
          timeframe: '1997-1998',
          league: '',
          level: '',
          city: 'Harmarville / Bethel Park, PA',
          role: '',
          desc1: '',
          desc2: '',
          desc3: ''
        }
      ]);
    };
    this.getHockeyPlayerAffiliates = function () {
      return ([
        {
          name: 'Orlando Solar Bears',
          timeframe: '4-2014',
          league: 'East Coast Hockey League',
          level:'Professional',
          city: '',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Portland Pirates',
          timeframe: '4-2007',
          league: 'American Hockey League',
          level:'Professional',
          city: 'Portland, ME',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Northeastern University',
          timeframe: '2002-2006',
          league: 'Hockey East',
          level:'NCAA D-1',
          city: 'Boston, MA',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Pittsburgh Forge',
          timeframe: '2001-2002',
          league: 'NAHL',
          level:'Jr.A',
          city: 'Pittsburgh',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'St. Louis Sting',
          timeframe: '2001',
          league: 'NAHL',
          level:'Jr.A',
          city: 'St. Louis',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Capital Centre Pride',
          timeframe: '2000',
          league: 'NAHL',
          level:'Jr.A',
          city: 'East Lansing, MI',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Grand Rapids Bearcats',
          timeframe: '1999-2000',
          league: 'NAHL',
          level:'Jr.A',
          city: 'Grand Rapids, MI',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Pittsburgh Hornets',
          timeframe: '1996-1999',
          league: 'MNHL',
          level:'AAA',
          city: 'Pittsburgh',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'USA Hockey Select 15, 16, 17 Mid-American Fesitval Team',
          timeframe: '1996-1998',
          league: '',
          level:'AAA',
          city: '',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Top Prospects - Mid-American Team',
          timeframe: '1996-1998',
          league: '',
          level:'AAA',
          city: 'Toronto',
          desc1: 'Spring Select Team',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Keystone State Games - Western PA District Team',
          timeframe: '1996-1997',
          league: '',
          level:'AAA',
          city: '',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Pittsburgh Amateur Penguins',
          timeframe: '1995-1996',
          league: 'Empire West',
          level:'AAA',
          city: 'Pittsburgh',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Eastern Tigers',
          timeframe: '1994-1995',
          league: 'PAHL',
          level:'A',
          city: 'Pittsburgh',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Fox Chapel Foxes',
          timeframe: '1990-1997',
          league: 'PIHL',
          level:'',
          city: 'Fox Chapel',
          desc1: '',
          desc2: '',
          desc3: ''
        }
      ]);
    };
    // this.getExperienceStuff = function () {
    //   return ([
    //     {
    //       workname: 'Creative Monster Consulting',
    //       workdates: '2011-Present',
    //       worktype: 'Entreprenurial startup;  Business Management, IT Consulting;  Digital + Print Advertising;  Outsourcing; Independent Business Finances and Ops;',
    //       workdesc: 'Revenue Growth, Business Management, Web Technology, Advertising, '
    //     },
    //     {
    //       workname: 'Catholic Youth Association',
    //       workdates: '2012-Present',
    //       worktype: 'Data Process Setup; Data Analysis; Reporting; Multiple Professional Websites with Drupal content managment systems;',
    //       workdesc: 'Data collection endpoint setup; Data Analysis; External reporting (United Way); Multiple professional websites with Drupal content management system;'
    //     },
    //     {
    //       workname: 'East End Eatz',
    //       workdates: '2014-Present',
    //       worktype: 'Professional Website; Content Management Application back-end;  Custom graphic design;  Social media set-up and training;  Growth advisory',
    //       workdesc: 'tech setup including nodejs and angularjs, facebook pages, social media marketing strategies'
    //     },
    //     {
    //       workname: 'Albert\'s Lounge',
    //       workdates: '2014',
    //       worktype: 'Professional website; Advertising; Graphic Design',
    //       workdesc: ''
    //     },
    //     {
    //       workname: 'G.A.S.S. Hockey',
    //       workdates: '2013',
    //       worktype: 'Professional website; Advertising; Assisting On-ice instruction',
    //       workdesc: ''
    //     },
    //     {
    //       workname: 'Upstairs Audio',
    //       workdates: '2012',
    //       worktype: 'Wordpress CMS set-up and training; Custom graphic design; Technology Training',
    //       workdesc: ''
    //     }
    //   ]);
    // };
    // this.getCorporateStuff = function () {
    //   return ([
    //     {
    //       workname: 'Dick\'s Sporting Goods',
    //       workdates: '2012-2013',
    //       worktitle: 'Senior Financial Analyst',
    //       workdept: 'Forecasting Planning & Analysis',
    //       workdesc: ''
    //     },
    //     {
    //       workname: 'Education Management Corp.',
    //       workdates: '2010-2012',
    //       worktitle: 'Senior Financial Analyst',
    //       workdept: 'Forecasting Planning & Analysis',
    //       workdesc: ''
    //     },
    //     {
    //       workname: 'General Electric / Gexpro',
    //       workdates: '2007-2010',
    //       worktitle: 'Financial Analyst / Management Trainee',
    //       workdept: 'Financial Management Program',
    //       workdesc: ''
    //     },  
    //     {
    //       workname: 'Aviva Insurance',
    //       workdates: '2006-2007',
    //       worktitle: 'Finance Co-op / Intern',
    //       workdept: 'Structured Settlements',
    //       workdesc: ''
    //     }
    //   ]);
    // };
    // this.getTechnicalStuff = function () {
    //   return ([
    //     {
    //      category: 'Office',
    //      skill: 'Microsoft Office \'03-\'14: Word, Excel, Outlook, PowerPoint, Sharepoint, MS Visio | Hyperion (Essbase) | SAP | Cognos | Business Objects | Oracle' 
    //     },
    //     {
    //      category: 'Web Programming',
    //      skill: 'HTML5 | CSS3 | Node.JS | Angular.JS | Express | MongoDB' 
    //     },
    //     {
    //      category: 'Creative',
    //      skill: 'Adobe CS5.5 -  Fireworks | Photoshop | After Effects | Audition' 
    //     },
    //     {
    //      category: 'Productivity',
    //      skill: 'Podio | Trello | MindMeister | RescueTime' 
    //     }
    //   ]);
    // };
    // this.getEducationStuff = function () {
    //   return ([
    //     {
    //      institution: 'General Electric / Gexpro, Shelton CT',
    //      dates: '2007-2009',
    //      desc1: '2-year post-graduate certificate program (testing, presentations, & on-site finance assignments)',
    //      desc2: '-',
    //      desc3: '-'
    //     },
    //     {
    //      institution: 'Northeastern University, Boston MA',
    //      dates: '2002-2007',
    //      desc1: 'B.S. Finance and Investments; Accounting',
    //      desc2: '4-year Athletic Scholarship, Men\'s Varsity Hockey 2002-2006 (NCAA D-1)',
    //      desc3: 'Participating founder of Varsity Squash program 2005-2007'
    //     }
    //   ]);
    // };
    // this.getExtracurricularStuff = function () {
    //   return ([
    //     {
    //       title: 'Extracurricular Interests',
    //       desc: 'Hockey | Squash Racquets (Singles/Doubles) | Biking | Hiking | Travel | Swimming | Skiing | Web Development | Investments | Economic and Trade Policy news'
    //     }
    //   ]);
    // };
  });




    