'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.website.modules', [])

.controller('modalController', [
	'$scope',
	'$modalInstance',
	'disqus',
	function($scope, $modalInstance, disqus) {
		$scope.disqus = disqus;

		$scope.close = function() {
			$modalInstance.dismiss('close');
		};
	}
])

.controller('ModulesCtrl', [
	'$scope',
	'$state',
	'anchorSmoothScroll',
	'$location',
	'$log',
	'$modal',
	function($scope, $state, anchorSmoothScroll, $location, $log, $modal) {

		$scope.gotoAnchor = function(elementId) {
			var newHash = 'module' + elementId;
			// $location.hash(newHash);
			anchorSmoothScroll.scrollTo(newHash);
		};

		$scope.openComments = function(size, moduledisqus) {

			$scope.disqus = moduledisqus;

			var modalInstance = $modal.open({
				animation : true,
				templateUrl : 'modalComments.html',
				controller : 'modalController',
				size : size,
				resolve : {
					disqus : function() {
						return $scope.disqus;
					}
				}
			});

			modalInstance.result.then(function() {
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		$scope.modules = [
			{
				name : 'Introdução',
				icon : 'images/modules/introduction.png',
				about : 'Sobre',
				type : 'silver',
				disqus : {
					'shortname' : 'dj360introducao',
					'id' : 'introducao',
					'title' : 'Comentários de Introdução',
					'url' : location.href + 'modules/introduction'
				},
				chapters : [
					{
						name : 'Olá mundo',
						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}

					},
					{
						name : 'Fundamentos',
						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'MTV',
						type : 'silver',
						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Ambiente de desenvolvimento',
				icon : 'images/modules/environment.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Ambientes virtuais',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Gerenciamento de dependências',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Instalação Django',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Sistema de controle de versões',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Organização do projeto',
				icon : 'images/modules/organization.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Concepção do projeto',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Concepção das aplicações',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Arquivo de cofiguração',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Base de dados',
				icon : 'images/modules/database.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'SQLite',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'MySQL',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'PostgreSQL',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Configuração da base de dados',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Models',
				icon : 'images/modules/models.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Sintaxe',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Campos',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Heranças',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Heranças genéricas',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Consultas',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Managers',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Raw SQL',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Aggregations',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Múltiplas bases de dados',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Migrations',
				icon : 'images/modules/migrations.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Diferenças entre Django 1.6 e 1.7',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Migrações',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Operações',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Views',
				icon : 'images/modules/views.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'URLconfs',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Vistas baseadas em funções',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Shortcuts',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Decorators',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Vistas de erros',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Vistas de erros',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Class Base Views',
				icon : 'images/modules/cbv.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Base Views: View',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Base Views: TemplateView',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Base Views: RedirectView',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Display Views: DetailView',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Display Views: ListView ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Editing Views: FormView ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Editing Views: CreateView ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Editing Views: UpdateView ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Generic Editing Views: DeleteView ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Boas práticas ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Mixins',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Context Processors',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Middlewares',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Templates',
				icon : 'images/modules/templates.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Sintaxe',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Template tags & filters',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Herança de templates',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Custom template filters',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Inclusion tags',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Block Super',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Statics & Media',
				icon : 'images/modules/statics.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Arquivos estáticos',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Arquivos de mídia',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Forms',
				icon : 'images/modules/forms.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Formulários basicos',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Campos',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Validations',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Widgets',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Model Forms',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Custom Validations',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Formset',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Signals',
				icon : 'images/modules/signals.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'pre_save & post_save',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Custom signals',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Receivers',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Ajax',
				icon : 'images/modules/ajax.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Ajax GET',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Ajax POST',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Custom Method',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Criando APIs',
				icon : 'images/modules/apis.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Django REST Framework',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'DRF: Serializers',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'DRF: Serializers entre modelos relacionados',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'DRF: Generic Field',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'DRF: Viewsets',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Contrib Admin',
				icon : 'images/modules/admin.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'ModelAdmin',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'List display',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Relacionamentos',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Pesquisas, filtros e listas editáveis',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Admin actions',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Contrib Auth',
				icon : 'images/modules/auth.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'User Model',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Custom User Model',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Autenticação',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Autorização',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Registro',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Emails',
				icon : 'images/modules/emails.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Mandrill',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Amazon SES',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Testes automatizados',
				icon : 'images/modules/tests.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Test Driven Development',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Testing Models',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Testing Views',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Testing Forms',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Caching',
				icon : 'images/modules/cache.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Caching',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Django Debug Toolbar',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Memcached',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Redis',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Deployment',
				icon : 'images/modules/deployment.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Heroku',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Amazon EC2',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Gitosis',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Nginx',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Amazon S3',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Python Social Auth',
				icon : 'images/modules/social.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Python Social Auth',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Instalação e configuração',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Facebook',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Twitter',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Google',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Pipelines',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Partial Pipeline',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Pagamentos',
				icon : 'images/modules/payment.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Paypal',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Stripe',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Pagseguro',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Celery',
				icon : 'images/modules/celery.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Celery & RabbitMQ',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Celery & Supervisor',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Celery Beat',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Segurança',
				icon : 'images/modules/security.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Segurança em Django',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Boas práticas',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Variáveis secretas',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'HTTPS',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Otimização',
				icon : 'images/modules/optimization.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Otimizando o DB',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Relatórios',
				icon : 'images/modules/reports.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Relatórios em PDF',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Relatórios em CSV',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Bonus: Integrando com Tornado',
				icon : 'images/modules/tornado.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Bonus: Integrando com NodeJs',
				icon : 'images/modules/nodejs.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Bonus: Integrando com AngularJs',
				icon : 'images/modules/angularjs.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
			{
				name : 'Projeto prático',
				icon : 'images/modules/project.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Criando o projeto prático',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					}
				]
			},
			{
				name : 'Django 1.7 para 1.8',
				icon : 'images/modules/upgrade_dj.png',
				about : 'Sobre',
				type : 'silver',
				chapters : [
					{
						name : 'Introdução',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Motores de Template',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'URLs',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'PostgreSQL',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'PostgreSQL: ArrayField',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'PostgreSQL: HStoreField',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'PostgreSQL: Range Fields',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Novos Data Types',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Model._meta API',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'ORM API',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
					{
						name : 'Aplicação',

						video : {
							url : 'link',
							time : '0:00'
						},
						pdf : {
							url : 'link'
						}
					},
				]
			},
		];
	}
]);