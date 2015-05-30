'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.webapp.controllers', [])

.controller('AppCtrl', [
	'$scope',
	'$state',
	'$log',
	function($scope, $state, $log) {
		var tabs = [
			{
				name : 'news',
				title : 'News',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'subjects',
				title : 'Principais assuntos',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'technologies',
				title : 'Tecnologias',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'modules',
				title : 'Módulos',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'cheatsheet',
				title : 'Cheatsheet',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'recommendations',
				title : 'Recomendo',
				icon : 'fa fa-user',
				content : "coming soon"
			},
			{
				name : 'about',
				title : 'Sobre',
				icon : 'fa fa-user',
				content : "coming soon"
			},
		];
		$scope.tabs = tabs;
		$scope.selectedIndex = 3;
		$scope.selectedTabOnChange = function(tab) {
			var newIndex = $scope.tabs.indexOf(tab);
			$scope.selectedIndex = newIndex;
		};
	}
]);