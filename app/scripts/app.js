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
		// $httpProvider.interceptors.push('AuthInterceptor');
		// $httpProvider.interceptors.push('PingInterceptor');
	}
])

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

.run(function() { // instance-injector
	// This is an example of a run block.
	// You can have as many of these as you want.
	// You can only inject instances (not Providers)
	// into run blocks
})

.factory("reactiveFactory", [
	function reactiveFactory() {
		return {
			// Execute an action after a period of time without calls
			getThrottle : _createThrottle
		};

		function _createThrottle(delay) {
			var throttleTimer = null;
			var throttleDelay = delay;

			if (!throttleDelay) {
				// use default value 250ms
				throttleDelay = 250;
			}

			return {
				run : function(action) {
					return function() {
						clearTimeout(throttleTimer);

						throttleTimer = setTimeout(function() {
							// execute action
							action.apply();

							// dispose timer
							throttleTimer = null;
						}, throttleDelay);
					}();
				}
			};
		}

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