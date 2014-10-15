'use strict';

angular.module('core')
  .service('sidebarnavService', function () {
    this.getSideBarNavStuff = function () {
      return ([
        {
          title: 'Home',
          href: '/#!/home',
          icon: 'fa fa-home fa-2x'
        },
        {
          title: 'New Article',
          href: '/#!/articles/create',
          icon: 'fa fa-file-o fa-2x'
        },
        {
          title: 'List all Articles',
          href: '/#!/articles',
          icon: 'fa fa-newspaper-o fa-2x'
        }
      ]);
    };
  });

