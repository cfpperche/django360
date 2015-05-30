'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.webapp.technologies', [])

.controller('TechnologiesCtrl', [
	'$scope',
	'$state',
	'anchorSmoothScroll',
	'$location',
	'$log',
	function($scope, $state, anchorSmoothScroll, $location, $log) {
		$scope.technologies = [
			{
				name : 'ubuntu',
				icon : 'images/logo-ubuntu-orange.svg',
				about : 'about',
				link : 'http://www.ubuntu.com/',
			},
			{
				name : 'python',
				icon : 'images/logo-python-logo-inkscape.svg',
				about : 'about',
				link : 'https://www.python.org/',
			},
			{
				name : 'django',
				icon : 'images/logo-django-logo-negative.svg',
				about : 'about',
				link : '',
			},
			{
				name : 'git',
				icon : 'images/logo-Git-logo.svg.png',
				about : 'about',
				link : '',
			},
			{
				name : 'github',
				icon : 'images/logo-blog-github.png',
				about : 'about',
				link : '',
			},
			{
				name : 'postgresql',
				icon : 'images/logo-postgresql-logo1.png',
				about : 'about',
				link : '',
			},
			{
				name : 'nginx',
				icon : 'images/logo-Nginx.svg',
				about : 'about',
				link : '',
			},
			{
				name : 'heroku',
				icon : 'images/logo-heroku.svg',
				about : 'about',
				link : '',
			},
			{
				name : 'amazon',
				icon : 'images/logo-AmazonWebservices_Logo.svg.png',
				about : 'about',
				link : '',
			},

			{
				name : 'redis',
				icon : 'images/logo-Redis_Logo.svg.png',
				about : 'about',
				link : '',
			},
			{
				name : 'django-rest-framework',
				icon : 'images/logo-drf-logo.png',
				about : 'about',
				link : '',
			},
			{
				name : 'angularjs',
				icon : 'images/logo-AngularJS_logo.svg.png',
				about : 'about',
				link : '',
			},
			{
				name : 'nodejs',
				icon : 'images/logo-591px-Node.js_Logo.svg.png',
				about : 'about',
				link : '',
			},
			{
				name : 'tornado',
				icon : 'images/logo-tornado.png',
				about : 'about',
				link : '',
			},
			{
				name : 'celery',
				icon : 'images/logo-celery.png',
				about : 'about',
				link : '',
			},
		]
	}
]);