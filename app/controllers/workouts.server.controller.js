'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Workout = mongoose.model('Workout'),
	_ = require('lodash');

/**
 * Create a Workout
 */
exports.create = function(req, res) {
	var workout = new Workout(req.body);
	workout.user = req.user;

	workout.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(workout);
		}
	});
};

/**
 * Show the current Workout
 */
exports.read = function(req, res) {
	res.jsonp(req.workout);
};

/**
 * Update a Workout
 */
exports.update = function(req, res) {
	var workout = req.workout ;

	workout = _.extend(workout , req.body);

	workout.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(workout);
		}
	});
};

/**
 * Delete an Workout
 */
exports.delete = function(req, res) {
	var workout = req.workout ;

	workout.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(workout);
		}
	});
};

/**
 * List of Workouts
 */
exports.list = function(req, res) { Workout.find().sort('-created').populate('user', 'displayName').exec(function(err, workouts) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(workouts);
		}
	});
};

/**
 * Workout middleware
 */
exports.workoutByID = function(req, res, next, id) { Workout.findById(id).populate('user', 'displayName').exec(function(err, workout) {
		if (err) return next(err);
		if (! workout) return next(new Error('Failed to load Workout ' + id));
		req.workout = workout ;
		next();
	});
};

/**
 * Workout authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.workout.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};