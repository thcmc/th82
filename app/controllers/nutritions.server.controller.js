'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Nutrition = mongoose.model('Nutrition'),
	_ = require('lodash');

/**
 * Create a Nutrition
 */
exports.create = function(req, res) {
	var nutrition = new Nutrition(req.body);
	nutrition.user = req.user;

	nutrition.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(nutrition);
		}
	});
};

/**
 * Show the current Nutrition
 */
exports.read = function(req, res) {
	res.jsonp(req.nutrition);
};

/**
 * Update a Nutrition
 */
exports.update = function(req, res) {
	var nutrition = req.nutrition ;

	nutrition = _.extend(nutrition , req.body);

	nutrition.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(nutrition);
		}
	});
};

/**
 * Delete an Nutrition
 */
exports.delete = function(req, res) {
	var nutrition = req.nutrition ;

	nutrition.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(nutrition);
		}
	});
};

/**
 * List of Nutritions
 */
exports.list = function(req, res) { Nutrition.find().sort('-created').populate('user', 'displayName').exec(function(err, nutritions) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(nutritions);
		}
	});
};

/**
 * Nutrition middleware
 */
exports.nutritionByID = function(req, res, next, id) { Nutrition.findById(id).populate('user', 'displayName').exec(function(err, nutrition) {
		if (err) return next(err);
		if (! nutrition) return next(new Error('Failed to load Nutrition ' + id));
		req.nutrition = nutrition ;
		next();
	});
};

/**
 * Nutrition authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.nutrition.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};