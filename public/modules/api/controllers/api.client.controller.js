'use strict';

angular.module('api').controller('FirstCtrl', ['$scope', 'Data',
	function($scope, Data) {
		$scope.data = Data;
	};
]);