'use strict';

// Portfolios controller
angular.module('portfolios').controller('PortfoliosController', ['$scope', '$stateParams', '$location', 'Authentication', 'Portfolios', 'GitHub', 'sidebarnavService',
	function($scope, $stateParams, $location, Authentication, Portfolios, GitHub, sidebarnavService) {
		

		$scope.authentication = Authentication;


		$scope.data = {};

		GitHub.query(function(response){
			$scope.data.repos = response;
		});

		$scope.sidebarLink = {};
	    try {
	      $scope.sidebarLink = sidebarnavService.getSideBarNavStuff();
	    } catch (error) {
	      console.error(error);
	    }


		// Create new Portfolio
		$scope.create = function() {
			// Create new Portfolio object
			var portfolio = new Portfolios ({
				name: this.name
			});

			// Redirect after save
			portfolio.$save(function(response) {
				$location.path('portfolios/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Portfolio
		$scope.remove = function( portfolio ) {
			if ( portfolio ) { portfolio.$remove();

				for (var i in $scope.portfolios ) {
					if ($scope.portfolios [i] === portfolio ) {
						$scope.portfolios.splice(i, 1);
					}
				}
			} else {
				$scope.portfolio.$remove(function() {
					$location.path('portfolios');
				});
			}
		};

		// Update existing Portfolio
		$scope.update = function() {
			var portfolio = $scope.portfolio ;

			portfolio.$update(function() {
				$location.path('portfolios/' + portfolio._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Portfolios
		$scope.find = function() {
			$scope.portfolios = Portfolios.query();
		};

		// Find existing Portfolio
		$scope.findOne = function() {
			$scope.portfolio = Portfolios.get({ 
				portfolioId: $stateParams.portfolioId
			});
		};
	}
]);