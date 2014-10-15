'use strict';

// Configuring the Articles module
angular.module('nutritions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		// Menus.addMenuItem('topbar', 'Nutritions', 'nutritions', 'dropdown', '/nutritions(/create)?');
		// Menus.addSubMenuItem('topbar', 'nutritions', 'List Nutritions', 'nutritions');
		// Menus.addSubMenuItem('topbar', 'nutritions', 'New Nutrition', 'nutritions/create');

		Menus.addMenuItem('topbar', 'Nutritions', 'nutritions');
		Menus.addMenuItem('topbar', 'New Nutrition Entry', 'nutritions/create');
	}
]);