'use strict';

// Nutritions controller
angular.module('nutritions').controller('NutritionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Nutritions',
	function($scope, $stateParams, $location, Authentication, Nutritions ) {
		$scope.authentication = Authentication;

		// Create new Nutrition
		$scope.create = function() {
			// Create new Nutrition object
			var nutrition = new Nutritions ({
				name: this.name
			});

			// Redirect after save
			nutrition.$save(function(response) {
				$location.path('nutritions/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Nutrition
		$scope.remove = function( nutrition ) {
			if ( nutrition ) { nutrition.$remove();

				for (var i in $scope.nutritions ) {
					if ($scope.nutritions [i] === nutrition ) {
						$scope.nutritions.splice(i, 1);
					}
				}
			} else {
				$scope.nutrition.$remove(function() {
					$location.path('nutritions');
				});
			}
		};

		// Update existing Nutrition
		$scope.update = function() {
			var nutrition = $scope.nutrition ;

			nutrition.$update(function() {
				$location.path('nutritions/' + nutrition._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Nutritions
		$scope.find = function() {
			$scope.nutritions = Nutritions.query();
		};

		// Find existing Nutrition
		$scope.findOne = function() {
			$scope.nutrition = Nutritions.get({ 
				nutritionId: $stateParams.nutritionId
			});
		};
	}
]);