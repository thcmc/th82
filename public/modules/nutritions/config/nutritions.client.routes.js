'use strict';

//Setting up route
angular.module('nutritions').config(['$stateProvider',
	function($stateProvider) {
		// Nutritions state routing
		$stateProvider.
		state('listNutritions', {
			url: '/nutritions',
			templateUrl: 'modules/nutritions/views/list-nutritions.client.view.html'
		}).
		state('createNutrition', {
			url: '/nutritions/create',
			templateUrl: 'modules/nutritions/views/create-nutrition.client.view.html'
		}).
		state('viewNutrition', {
			url: '/nutritions/:nutritionId',
			templateUrl: 'modules/nutritions/views/view-nutrition.client.view.html'
		}).
		state('editNutrition', {
			url: '/nutritions/:nutritionId/edit',
			templateUrl: 'modules/nutritions/views/edit-nutrition.client.view.html'
		});
	}
]);