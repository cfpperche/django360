'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.website', [
	'app.website.services',
	'app.website.controllers',
	'app.website.directives',
	'app.website.modules',
	'app.website.project',
	'app.website.motivation',
	'app.website.recommendations',
	'app.website.technologies',
	'app.website.mainSubjects'
])

// Routes
.config([
	'$stateProvider',
	function($stateProvider) {
		// Public routes
		$stateProvider.state('public.index', {
			url : '/',
			templateUrl : 'scripts/website/views/index.html'
		});
	}
]);