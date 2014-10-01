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
			templateUrl: 'modules/core/views/h.client.view.finance.html',
			requireLogin: true
		}).
		state('home.web', {
			url: 'web',
			templateUrl: 'modules/core/views/h.client.view.web.html'
		}).
		state('home.athletics', {
			url: 'athletics',
			templateUrl: 'modules/core/views/h.client.view.athletics.html'
		});
	}
]);