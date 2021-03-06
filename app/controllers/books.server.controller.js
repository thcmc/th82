'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Book = mongoose.model('Book'),
	_ = require('lodash');
	// ,
	// googleapi = require('node-google-api')('AIzaSyAffzxPYpgZ14gieEE04_u4U-5Y26UQ8_0');


// exports.gbooks = function(req, res) {
// 	googleapi.build(function(api) {
// 	  for(var k in api){
// 	    console.log(k);
// 	  }
// 	});
	// 	var favoriteslist = req.favoriteslist;

	// favoriteslist.googleapi.build(function(err, api){

	// })


	// googleapi.build(function(api) {
	// 	api.books.mylibrary.bookshelves.list({
	// 		userId: '114705319517394488779',
	// 		source: 'gbs_lp_bookshelf_list'
	// 	}, function(result){
	// 		if(result.error) {
	// 			console.log(result.error);
	// 		} else {
	// 			for(var i in result.items) {
	// 		        console.log(result.items[i].summary);
	// 		    }
	// 		}
	// 	});
	// });
// };	

/**
 * Create a Book
 */
exports.create = function(req, res) {
	var book = new Book(req.body);
	book.user = req.user;

	book.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(book);
		}
	});
};

/**
 * Show the current Book
 */
exports.read = function(req, res) {
	res.jsonp(req.book);
};

/**
 * Update a Book
 */
exports.update = function(req, res) {
	var book = req.book ;

	book = _.extend(book , req.body);

	book.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(book);
		}
	});
};

/**
 * Delete an Book
 */
exports.delete = function(req, res) {
	var book = req.book ;

	book.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(book);
		}
	});
};

/**
 * List of Books
 */
exports.list = function(req, res) { Book.find().sort('-created').populate('user', 'displayName').exec(function(err, books) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(books);
		}
	});
};

/**
 * Book middleware
 */
exports.bookByID = function(req, res, next, id) { Book.findById(id).populate('user', 'displayName').exec(function(err, book) {
		if (err) return next(err);
		if (! book) return next(new Error('Failed to load Book ' + id));
		req.book = book ;
		next();
	});
};

/**
 * Book authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.book.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};