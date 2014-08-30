'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/h.client.view.html'
		}).
		state('home.finance', {
			url: 'finance',
			templateUrl: 'modules/core/views/h.client.view.finance.html'
		}).
		state('home.web', {
			url: 'web',
			templateUrl: 'modules/core/views/h.client.view.web.html'
		}).
		state('home.athletics', {
			url: 'athletics',
			templateUrl: 'modules/core/views/h.client.view.athletics.html'
		})/*.
		state('home.map', {
			url: 'location',
			templateUrl: 'modules/core/views/home2.client.view.map.html'
		}).
		state('home.social', {
			url: 'social',
			templateUrl: 'modules/core/views/home2.client.view.social.html'
		})
		.
		state('home.finance', {
			url: 'finance',
			templateUrl: 'modules/core/views/home2.client.view.finance.html'
		}).
		state('home.finance.roles', {
			url: 'roles',
			templateUrl: 'modules/core/views/home2.client.view.finance.roles.html'
		}).
		state('home.finance.employers', {
			url: 'employers',
			templateUrl: 'modules/core/views/home2.client.view.finance.employers.html',
			controller: 'HomeController'
		}).
		state('home.hockey', {
			url: 'hockey',
			templateUrl: 'modules/core/views/home2.client.view.hockey.html'
		}).
		state('home.hockey.playing', {
			url: 'playing',
			templateUrl: 'modules/core/views/home2.client.view.hockey.playing.html'
		}).
		state('home.hockey.coaching', {
			url: 'coaching',
			templateUrl: 'modules/core/views/home2.client.view.hockey.coaching.html'
		}).
		state('home.web', {
			url: 'web',
			templateUrl: 'modules/core/views/home2.client.view.web.html'
		}).
		state('home.web.projects', {
			url: 'projects',
			templateUrl: 'modules/core/views/home2.client.view.web.projects.html'
		}).
		state('home.contact', {
			url: 'contact',
			templateUrl: 'modules/core/views/home2.client.view.contact.html'
		})*/;
	}
]);