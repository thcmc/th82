'use strict';

/**
 * Module dependencies.
 */
var mongoose 	= require('mongoose'),
	Portfolio 	= mongoose.model('Portfolio'),
	_ 			= require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Portfolio already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Portfolio
 */
exports.create = function(req, res) {
	var portfolio = new Portfolio(req.body);
	portfolio.user = req.user;

	portfolio.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(portfolio);
		}
	});
};

/**
 * Show the current Portfolio
 */
exports.read = function(req, res) {
	res.jsonp(req.portfolio);
};

/**
 * Update a Portfolio
 */
exports.update = function(req, res) {
	var portfolio = req.portfolio ;

	portfolio = _.extend(portfolio , req.body);

	portfolio.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(portfolio);
		}
	});
};

/**
 * Delete an Portfolio
 */
exports.delete = function(req, res) {
	var portfolio = req.portfolio ;

	portfolio.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(portfolio);
		}
	});
};

/**
 * List of Portfolios
 */
exports.list = function(req, res) { Portfolio.find().sort('-created').populate('user', 'displayName').exec(function(err, portfolios) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(portfolios);
		}
	});
};

/**
 * Portfolio middleware
 */
exports.portfolioByID = function(req, res, next, id) { Portfolio.findById(id).populate('user', 'displayName').exec(function(err, portfolio) {
		if (err) return next(err);
		if (! portfolio) return next(new Error('Failed to load Portfolio ' + id));
		req.portfolio = portfolio ;
		next();
	});
};

/**
 * Portfolio authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.portfolio.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};