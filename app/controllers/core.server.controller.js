'use strict';


var graph = require('fbgraph');
/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};