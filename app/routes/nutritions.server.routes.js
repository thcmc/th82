'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var nutritions = require('../../app/controllers/nutritions');

	// Nutritions Routes
	app.route('/nutritions')
		.get(users.requiresLogin, nutritions.list)
		.post(users.requiresLogin, nutritions.create);

	app.route('/nutritions/:nutritionId')
		.get(nutritions.read)
		.put(users.requiresLogin, nutritions.hasAuthorization, nutritions.update)
		.delete(users.requiresLogin, nutritions.hasAuthorization, nutritions.delete);

	// Finish by binding the Nutrition middleware
	app.param('nutritionId', nutritions.nutritionByID);
};