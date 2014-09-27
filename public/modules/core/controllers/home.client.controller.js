'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'financeService', function ($scope, Authentication, financeService) {
    $scope.authentication = Authentication;

    $scope.meanStuff = {};
    try {
      $scope.meanStuff = financeService.getMeanStuff();
    } catch (error) {
      console.error(error);
    }
    $scope.experienceStuff = {};
    try {
      $scope.experienceStuff = financeService.getExperienceStuff();
    } catch (error) {
      console.error(error);
    }
    $scope.corporateStuff = {};
    try {
      $scope.corporateStuff = financeService.getCorporateStuff();
    } catch (error) {
      console.error(error);
    }
    $scope.technicalStuff = {};
    try {
      $scope.technicalStuff = financeService.getTechnicalStuff();
    } catch (error) {
      console.error(error);
    }
    $scope.eductionStuff = {};
    try {
      $scope.eductionStuff = financeService.getEducationStuff();
    } catch (error) {
      console.error(error);
    }
    // $scope.ongoingStuff = {};
    // try {
    //   $scope.ongoingStuff = financeService.getOngoingStuff();
    // } catch (error) {
    //   console.error(error);
    // }
    $scope.extracurricularStuff = {};
    try {
      $scope.extracurricularStuff = financeService.getExtracurricularStuff();
    } catch (error) {
      console.error(error);
    }
}]);