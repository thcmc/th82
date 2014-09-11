'use strict';

// Portfolios controller
angular.module('portfolios').controller('PortfoliosController', ['$scope', '$stateParams', '$location', 'Authentication', 'Portfolios',
	function($scope, $stateParams, $location, Authentication, Portfolios ) {
		$scope.authentication = Authentication;


		$scope.categories = [
			{id: 0, name: 'Graphics'},
			{id: 1, name: 'Photography'},
			{id: 2, name: 'Wordpress'},
			{id: 3, name: 'Joomla'},
			{id: 4, name: 'Custom Websites'},
			{id: 5, name: 'Applications'},
			{id: 6, name: 'Video'},
			{id: 7, name: 'Music/Other Multimedia'},
		];

		$scope.items = [
			{id: 0, title: 'a', desc: 'descr1', src:'src0', category: 'Graphics'},
			{id: 1, title: 'b', desc: 'descr2', src:'src1', category: 'Photography'},
			{id: 2, title: 'c', desc: 'descr3', src:'src2', category: 'Wordpress'},
			{id: 3, title: 'd', desc: 'descr4', src:'src3', category: 'Joomla'},
			{id: 4, title: 'e', desc: 'descr5', src:'src4', category: 'Custom Websites'},
			{id: 5, title: 'f', desc: 'descr6', src:'src5', category: 'Applications'},
			{id: 6, title: 'g', desc: 'descr7', src:'src6', category: 'Music/Other Multimedia'},
		];

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