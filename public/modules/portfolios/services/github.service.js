'use strict';


angular.module('portfolios').factory('GitHub', ['$resource',
	function($resource) {
		return $resource('https://api.github.com/users/thcmc/repos', {});
		// return $resource('https://api.github.com/users/thcmc', {});
	}
]);
