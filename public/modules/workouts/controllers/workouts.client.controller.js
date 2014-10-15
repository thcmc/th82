'use strict';

// Workouts controller
angular.module('workouts').controller('WorkoutsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Workouts',
	function($scope, $stateParams, $location, Authentication, Workouts ) {
		$scope.authentication = Authentication;

		// Create new Workout
		$scope.create = function() {
			// Create new Workout object
			var workout = new Workouts ({
				name: this.name
			});

			// Redirect after save
			workout.$save(function(response) {
				$location.path('workouts/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Workout
		$scope.remove = function( workout ) {
			if ( workout ) { workout.$remove();

				for (var i in $scope.workouts ) {
					if ($scope.workouts [i] === workout ) {
						$scope.workouts.splice(i, 1);
					}
				}
			} else {
				$scope.workout.$remove(function() {
					$location.path('workouts');
				});
			}
		};

		// Update existing Workout
		$scope.update = function() {
			var workout = $scope.workout ;

			workout.$update(function() {
				$location.path('workouts/' + workout._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Workouts
		$scope.find = function() {
			$scope.workouts = Workouts.query();
		};

		// Find existing Workout
		$scope.findOne = function() {
			$scope.workout = Workouts.get({ 
				workoutId: $stateParams.workoutId
			});
		};
	}
]);