'use strict';

module.exports = {
	db: 'mongodb://tmh144429:F1la50won@dbh56.mongolab.com:27567/th',
	app: {
		title: 'TimHeneroty'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '232229536969930',
		clientSecret: process.env.FACEBOOK_SECRET || '155524a8e8b04e6d45829a8ecfc5682a',
		callbackURL: 'http://www.timheneroty.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'dxQ3qJNDCEXbKq9lZL78h9eg0',
		clientSecret: process.env.TWITTER_SECRET || 'oncPykt8mrS9fYtnqBrD9iEDC5oGKg3AXV4Y7YHiE2ty0Ej4zv',
		callbackURL: 'http://www.timheneroty.com/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
