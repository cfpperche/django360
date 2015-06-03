'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.webapp.subjects', [])

.controller('SubjectsCtrl', [
	'$scope',
	'$state',
	'anchorSmoothScroll',
	'$location',
	'$log',
	function($scope, $state, anchorSmoothScroll, $location, $log) {

		$scope.subjects = [
			{
				label : 'Fundamentos a partir do zero',
				icon : 'fa-check'
			},
			{
				label : 'Bom ambiente de desenvolvimento',
				icon : 'fa-check'
			},
			{
				label : 'Organização do projeto',
				icon : 'fa-check'
			},
			{
				label : 'Banco de dados',
				icon : 'fa-check'
			},
			{
				label : 'Migrações',
				icon : 'fa-check'
			},
			{
				label : 'Views',
				icon : 'fa-check'
			},
			{
				label : 'Templates, Templatetags, Filters',
				icon : 'fa-check'
			},
			{
				label : 'Admin avançado',
				icon : 'fa-check'
			},
			{
				label : 'Formulários avançados',
				icon : 'fa-check'
			},
			{
				label : 'Processadores de contexto',
				icon : 'fa-check'
			},
			{
				label : 'Views baseadas em classes',
				icon : 'fa-check'
			},
			{
				label : 'Gerenciamento de usuários',
				icon : 'fa-check'
			},
			{
				label : 'Login com redes sociais',
				icon : 'fa-check'
			},
			{
				label : 'Sistema de cache',
				icon : 'fa-check'
			},
			{
				label : 'Web Services',
				icon : 'fa-check'
			},
			{
				label : 'Middlewares',
				icon : 'fa-check'
			},
			{
				label : 'Transações com Paypal, Stripe e Pagseguro',
				icon : 'fa-check'
			},
			{
				label : 'Testing',
				icon : 'fa-check'
			},
			{
				label : 'Otimização e Segurança',
				icon : 'fa-check'
			},
			{
				label : 'Implantação em Nginx, Heroku e AWS',
				icon : 'fa-check'
			},
		]
	}
]);