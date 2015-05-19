'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('application', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngTouch',
	'ngRoute',
	'ui.router',
	'ngMaterial',
	'angular-blocks',
	'toasty',
	'ui.bootstrap',
	'angularUtils.directives.dirDisqus',
	'app.website'
])

// Constants
.constant('API_SERVER', 'http://127.0.0.1:8000/webapp/')

// Configs
.config([
	'$httpProvider',
	'$locationProvider',
	function($httpProvider, $locationProvider) {
		// $locationProvider.html5Mode(true);
	}
])

.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('yellow');
})

// Routes
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// Public routes
		$stateProvider.state('public', {
			abstract : true,
			template : "<div data-ui-view></div>"
		}).state('public.404', {
			url : '/404',
			templateUrl : 'scripts/core/views/404.html'
		});

		$urlRouterProvider.otherwise('/');
	}
])

.factory('notificationsFactory', [
	'toasty',
	'$timeout',
	'$window',
	function(toasty, $timeout, $window) {
		return {
			success : function(title, msg) {
				if (angular.isUndefined(title)) {
					title = 'Webapp success';
				}
				if (angular.isUndefined(msg)) {
					msg = 'Success messagem';
				}
				toasty.pop.success({
					title : title,
					msg : msg,
				});

			},
			error : function(title, msg) {
				if (angular.isUndefined(title)) {
					title = 'Webapp error';
				}
				if (angular.isUndefined(msg)) {
					msg = 'Error messagem';
				}
				toasty.pop.error({
					title : title,
					msg : msg,
				});
			},
		};
	}
]);