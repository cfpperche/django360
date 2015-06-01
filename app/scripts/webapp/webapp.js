'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.webapp', [
	'app.webapp.controllers',
	'app.webapp.modules',
	'app.webapp.recommendations',
	'app.webapp.technologies',
	'app.webapp.subjects'
])

// Routes
.config([
	'$stateProvider',
	function($stateProvider) {
		// Public routes
		$stateProvider.state('public.index', {
			url : '/',
			templateUrl : 'scripts/webapp/views/webapp.html'
		});
	}
]);