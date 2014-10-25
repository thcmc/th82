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
          name: 'Pittsburgh Penguins Elite AAA U18',
          timeframe: '2011 - 2014',
          league: 'T1EHL',
          level: 'AAA',
          city: 'Pittsburgh',
          role: 'Assistant Coach / Goalie Instructor',
          desc1: '',
          desc2: '',
          desc3: ''
        },
        {
          name: 'Shane Clifford Hockey Schools',
          timeframe: '1998 - 2006',
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
  });




    