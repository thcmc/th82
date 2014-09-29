'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'financeService', 'athleticsService', 'webService', function ($scope, Authentication, financeService, athleticsService, webService) {
    $scope.authentication = Authentication;

    /* ------------------------------------------------------------------------------------------webService */
    $scope.websiteStuff = {};
    try {
      $scope.websiteStuff = webService.getWebsiteStuff();
    } catch (error) {
      console.error(error);
    }
    /* ------------------------------------------------------------------------------------------athleticsService */
    $scope.hockeyPlayerAffiliates = {};
    try {
      $scope.hockeyPlayerAffiliates = athleticsService.getHockeyPlayerAffiliates();
    } catch (error) {
      console.error(error);
    }
    $scope.hockeyCoachingAffiliates = {};
    try {
      $scope.hockeyCoachingAffiliates = athleticsService.getHockeyCoachingAffiliates();
    } catch (error) {
      console.error(error);
    }
    /* ------------------------------------------------------------------------------------------financeService */
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
    $scope.educationStuff = {};
    try {
      $scope.educationStuff = financeService.getEducationStuff();
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