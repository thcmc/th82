'use strict';

angular.module('portfolios').factory('apiFactory', function ($http, $q){
	return {
		getGitHub: function () {

			var deferred = $q.defer();

			$http.get('https://api.github.com/users/thcmc/repos').success(fucntion(data){

				deferred.resolve(data);
			}).error(function() {
				deferred.reject();
			});

			return deferred.promise;
		}
	}
});



/*  ----Controller----First need to inject 'apiFactory' into Controller.  Then,
*   
*   $scope.gitHub = myService.getGitHub();
*
*   ----HTML----
* 	<ul>
*       <li ng-repeat="item in foo">{{item.id}} - {{item.name}}</li>
*   </ul>
*
*
*/
