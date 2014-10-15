'use strict';

(function() {
	// Nutritions Controller Spec
	describe('Nutritions Controller Tests', function() {
		// Initialize global variables
		var NutritionsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Nutritions controller.
			NutritionsController = $controller('NutritionsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Nutrition object fetched from XHR', inject(function(Nutritions) {
			// Create sample Nutrition using the Nutritions service
			var sampleNutrition = new Nutritions({
				name: 'New Nutrition'
			});

			// Create a sample Nutritions array that includes the new Nutrition
			var sampleNutritions = [sampleNutrition];

			// Set GET response
			$httpBackend.expectGET('nutritions').respond(sampleNutritions);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.nutritions).toEqualData(sampleNutritions);
		}));

		it('$scope.findOne() should create an array with one Nutrition object fetched from XHR using a nutritionId URL parameter', inject(function(Nutritions) {
			// Define a sample Nutrition object
			var sampleNutrition = new Nutritions({
				name: 'New Nutrition'
			});

			// Set the URL parameter
			$stateParams.nutritionId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/nutritions\/([0-9a-fA-F]{24})$/).respond(sampleNutrition);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.nutrition).toEqualData(sampleNutrition);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Nutritions) {
			// Create a sample Nutrition object
			var sampleNutritionPostData = new Nutritions({
				name: 'New Nutrition'
			});

			// Create a sample Nutrition response
			var sampleNutritionResponse = new Nutritions({
				_id: '525cf20451979dea2c000001',
				name: 'New Nutrition'
			});

			// Fixture mock form input values
			scope.name = 'New Nutrition';

			// Set POST response
			$httpBackend.expectPOST('nutritions', sampleNutritionPostData).respond(sampleNutritionResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Nutrition was created
			expect($location.path()).toBe('/nutritions/' + sampleNutritionResponse._id);
		}));

		it('$scope.update() should update a valid Nutrition', inject(function(Nutritions) {
			// Define a sample Nutrition put data
			var sampleNutritionPutData = new Nutritions({
				_id: '525cf20451979dea2c000001',
				name: 'New Nutrition'
			});

			// Mock Nutrition in scope
			scope.nutrition = sampleNutritionPutData;

			// Set PUT response
			$httpBackend.expectPUT(/nutritions\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/nutritions/' + sampleNutritionPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid nutritionId and remove the Nutrition from the scope', inject(function(Nutritions) {
			// Create new Nutrition object
			var sampleNutrition = new Nutritions({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Nutritions array and include the Nutrition
			scope.nutritions = [sampleNutrition];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/nutritions\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleNutrition);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.nutritions.length).toBe(0);
		}));
	});
}());