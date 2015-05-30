'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.webapp.recommendations', [])

.controller('RecommendationsCtrl', [
	'$scope',
	'$state',
	'anchorSmoothScroll',
	'$location',
	'$log',
	function($scope, $state, anchorSmoothScroll, $location, $log) {
		$scope.recommendations = [
			{
				name : 'ppz',
				title : 'Python para Zumbis',
				autor : 'Fernando Masanori',
				img : 'images/ppz.jpg',
				link : 'http://pycursos.com/python-para-zumbis/',
				about : 'about course',
				my_opinion : 'my opinion'
			},
			{
				name : 'wttd',
				title : 'Welcome to the Django',
				autor : 'Henrique Bastos',
				img : 'images/wttd.jpg',
				link : 'http://welcometothedjango.com.br/',
				about : 'about course',
				my_opinion : 'my opinion'
			},
			{
				name : 'loiane',
				title : 'Loiane Groner',
				autor : 'Loiane Groner',
				img : 'images/loiane.jpg',
				link : 'http://www.loiane.com/cursos/',
				about : 'about course',
				my_opinion : 'my opinion'
			},
		]

	}
]);