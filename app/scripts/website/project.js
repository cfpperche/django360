'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.website.project', [])

.controller('ProjectCtrl', [
	'$scope',
	'$state',
	'anchorSmoothScroll',
	'$location',
	'$log',
	function($scope, $state, anchorSmoothScroll, $location, $log) {
		$scope.greetings = 'Olá caro desenvolverdor,';

	}
]);