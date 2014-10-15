'use strict';

//Nutritions service used to communicate Nutritions REST endpoints
angular.module('nutritions').factory('Nutritions', ['$resource',
	function($resource) {
		return $resource('nutritions/:nutritionId', { nutritionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);