'use strict';

module.exports = {
	app: {
		title: 'TimHeneroty',
		description: 'Pittsburgh Senior Financial Analyst, Web Developer, Hockey Coach',
		keywords: 'Tim Heneroty, Hockey Pittsburgh, Web Design Pittsburgh, Hockey Lessons Pittsburgh, Analyst Pittsburgh'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/modules/core/css/bootstrap.css',
				'public/modules/core/css/th.css',
				'//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
				'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
				'https://fonts.googleapis.com/css?family=Megrim',
				'https://fonts.googleapis.com/css?family=Rosarivo',
				'https://fonts.googleapis.com/css?family=Montserrat'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
