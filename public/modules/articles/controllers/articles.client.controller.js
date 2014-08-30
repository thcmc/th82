'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {

		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			this.content = '';
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};

		$scope.numLimit=150;

		$scope.articleLimit=5;

		$scope.orightml = '<h2>Try Out The Editor!</h2><p>Here you can make a super cool Text Article for display to the public.</p><p><b>Features:</b></p><ol><li>Your Content</li><li>Super Easy <b>formatting</b> Options</li><li style="color: green;">Edit and Update later</li><li>View Full list of Articles, or one at a time.</li><li class="text-danger">Submit makes article Public.</li><li>Delete an article by going to it individually.</li></ol><p><b>Garbage Can Icon = Delete</b> <a href="#">Here</a> </p>';
		$scope.content = $scope.orightml;
		$scope.disabled = false;
		
	}
]);