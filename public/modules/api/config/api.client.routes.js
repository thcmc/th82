'use strict';

// Setting up route
angular.module('api').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('api', {
			url: '/api',
			templateUrl: 'modules/api/views/index.html'
		})/*.
		state('api.scraping', {
			url: '/scraping',
			templateUrl: 'modules/api/views/index.scraping.html'
		}).
		state('facebook', {
			url: '/facebook',
			templateUrl: 'modules/api/views/facebook.html'
		})*//*.
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		})*/;
	}
]);