'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular
	.module('app.webapp.modules', [])

	.controller('modalDisqusController', [
		'$scope',
		'$modalInstance',
		'disqus',
		function($scope, $modalInstance, disqus) {
			$scope.disqus = disqus;
			$scope.contentLoaded = true;

			$scope.close = function() {
				$scope.contentLoaded = false;
				$modalInstance.dismiss('close');
			};
		}
	])

	.controller('modalGistController', [
		'$scope',
		'$modalInstance',
		'gist',
		function($scope, $modalInstance, gist) {
			$scope.gist = gist;
			$scope.contentLoaded = true;

			$scope.close = function() {
				$scope.contentLoaded = false;
				$modalInstance.dismiss('close');
			};
		}
	])

	.controller('modalSlideshareController', [
		'$scope',
		'$modalInstance',
		'slideshare',
		function($scope, $modalInstance, slideshare) {
			$scope.slideshare = slideshare;
			$scope.contentLoaded = true;

			$scope.close = function() {
				$scope.contentLoaded = false;
				$modalInstance.dismiss('close');
			};
		}
	])

	.controller('modalYoutubeController', [
		'$scope',
		'$modalInstance',
		'youtube',
		function($scope, $modalInstance, youtube) {
			$scope.youtube = youtube;
			$scope.contentLoaded = true;

			$scope.close = function() {
				$scope.contentLoaded = false;
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
		'$sce',
		function($scope, $state, anchorSmoothScroll, $location, $log, $modal, $sce) {

			$scope.gotoAnchor = function(elementId) {
				var newHash = 'module' + elementId;
				// $location.hash(newHash);
				anchorSmoothScroll.scrollTo(newHash);
			};

			/*
			 * DISQUS MODAL
			 */
			$scope.openDisqus = function(size, moduledisqus) {
				if ($scope.disqus) {
					delete $scope.disqus;
				};
				$scope.disqus = moduledisqus;
				var templateModal = '<div class="modal-header"><span><h4 class="modal-title"><i class="fa fa-lg fa-comments-o"> {{disqus.title}}</i></h4></span>' +
				'<span class="close"><button class="btn btn-danger" ng-click="close()"><i class="fa fa-lg fa-times"></i></button></span></div>' +
				'<div class="modal-body"><app-disqus-comments disqus-shortname="{{disqus.shortname}}"' +
				'disqus-identifier="{{ disqus.id }}" disqus-url="{{ disqus.url }}" ready-to-bind="{{ contentLoaded }}"> </app-disqus-comments></div>';

				var modalInstance = $modal.open({
					animation : true,
					template : templateModal,
					controller : 'modalDisqusController',
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

			/*
			 * GIST MODAL
			 */
			$scope.openGist = function(size, gist) {
				$scope.gist = gist;

				var templateModal = '<div class="modal-header"><span><h4 class="modal-title"><i class="fa fa-lg fa-github-alt"> Gist</i></h4></span>' +
				'<span class="close"><button class="btn btn-danger" ng-click="close()"><i class="fa fa-lg fa-times"></i></button></span></div>' +
				'<div class="modal-body" style="padding: 0px;"><app-gist gist="{{gist}}" ready-to-bind="{{contentLoaded}}"></app-gist></div>';

				var modalInstance = $modal.open({
					animation : true,
					template : templateModal,
					controller : 'modalGistController',
					size : size,
					resolve : {
						gist : function() {
							return $scope.gist;
						}
					}
				});
				modalInstance.result.then(function() {
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			/*
			 * SLIDESHARE MODAL
			 */
			$scope.openSlideshare = function(size, slideshare) {
				$scope.slideshare = slideshare;

				var templateModal = '<div class="modal-header"><span><h4 class="modal-title"><i class="fa fa-lg fa-slideshare"> Slideshare</i></h4></span>' +
				'<span class="close"><button class="btn btn-danger" ng-click="close()"><i class="fa fa-lg fa-times"></i></button></span></div>' +
				'<div class="modal-body" style="padding: 0px;"><app-slideshare slideshare-url="{{slideshare.url}}" ready-to-bind="{{contentLoaded}}"></app-slideshare></div>';

				var modalInstance = $modal.open({
					animation : true,
					template : templateModal,
					controller : 'modalSlideshareController',
					size : size,
					resolve : {
						slideshare : function() {
							return $scope.slideshare;
						}
					}
				});
				modalInstance.result.then(function() {
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			/*
			 * YOUTUBE MODAL
			 */
			$scope.openYoutube = function(size, youtube) {

				$scope.youtube = youtube;
				var templateModal = '<div class="modal-header"><span><h4 class="modal-title"><i class="fa fa-lg fa-youtube"> Youtube</i></h4></span>' +
				'<span class="close"><button class="btn btn-danger" ng-click="close()"><i class="fa fa-lg fa-times"></i></button></span></div>' +
				'<div class="modal-body" style="padding: 0px;"><app-youtube youtube-url="{{youtube.url}}" ready-to-bind="{{contentLoaded}}"></app-youtube></div>';

				var modalInstance = $modal.open({
					animation : true,
					template : templateModal,
					controller : 'modalYoutubeController',
					size : size,
					resolve : {
						youtube : function() {
							return $scope.youtube;
						}
					}
				});
				modalInstance.result.then(function() {
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			/*
			 * SCOPE MODULES
			 */

			$scope.modules = [
				{
					name : 'Introdução',
					icon : 'images/modules/introduction.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360introducao',
						'id' : '/modules/introduction',
						'title' : 'Comentários',
						'url' : location.href + 'modules/introduction',
					},
					chapters : [
						{
							name : 'Olá mundo',
							video : {
								url : 'sMKoNBRZM1M',
								time : '0:00'
							},
							pdf : {
								url : '//pt.slideshare.net/slideshow/embed_code/key/6nEDoW2dU03miD'
							},
							git : {
								url : 'https://github.com/ebugfix/django360',
								gist : '47c4f983bf84a6cf0f22',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Ambiente de desenvolvimento',
					icon : 'images/modules/environment.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360ambientededesenvolvimento',
						'id' : '/modules/ambientededesenvolvimento',
						'title' : 'Comentários',
						'url' : location.href + 'modules/ambientededesenvolvimento',
					},
					chapters : [
						{
							name : 'Ambientes virtuais',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Organização do projeto',
					icon : 'images/modules/organization.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360organizacaodoprojeto',
						'id' : '/modules/organizacaodoprojeto',
						'title' : 'Comentários',
						'url' : location.href + 'modules/organizacaodoprojeto',
					},
					chapters : [
						{
							name : 'Concepção do projeto',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Base de dados',
					icon : 'images/modules/database.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360basededados',
						'id' : '/modules/basededados',
						'title' : 'Comentários',
						'url' : location.href + 'modules/basededados',
					},
					chapters : [
						{
							name : 'SQLite',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Models',
					icon : 'images/modules/models.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360models',
						'id' : '/modules/models',
						'title' : 'Comentários',
						'url' : location.href + 'modules/models',
					},
					chapters : [
						{
							name : 'Sintaxe',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Migrations',
					icon : 'images/modules/migrations.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360migrations',
						'id' : '/modules/migrations',
						'title' : 'Comentários',
						'url' : location.href + 'modules/migrations',
					},
					chapters : [
						{
							name : 'Diferenças entre Django 1.6 e 1.7',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Views',
					icon : 'images/modules/views.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360views',
						'id' : '/modules/views',
						'title' : 'Comentários',
						'url' : location.href + 'modules/views',
					},
					chapters : [
						{
							name : 'URLconfs',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Class Base Views',
					icon : 'images/modules/cbv.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360classbaseviews',
						'id' : '/modules/classbaseviews',
						'title' : 'Comentários',
						'url' : location.href + 'modules/classbaseviews',
					},
					chapters : [
						{
							name : 'Base Views: View',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Templates',
					icon : 'images/modules/templates.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360templates',
						'id' : '/modules/templates',
						'title' : 'Comentários',
						'url' : location.href + 'modules/templates',
					},
					chapters : [
						{
							name : 'Sintaxe',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Statics & Media',
					icon : 'images/modules/statics.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360staticsmedia',
						'id' : '/modules/staticsmedia',
						'title' : 'Comentários',
						'url' : location.href + 'modules/staticsmedia',
					},
					chapters : [
						{
							name : 'Arquivos estáticos',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Forms',
					icon : 'images/modules/forms.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360forms',
						'id' : '/modules/forms',
						'title' : 'Comentários',
						'url' : location.href + 'modules/forms',
					},
					chapters : [
						{
							name : 'Formulários basicos',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Signals',
					icon : 'images/modules/signals.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360signals',
						'id' : '/modules/signals',
						'title' : 'Comentários',
						'url' : location.href + 'modules/signals',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Ajax',
					icon : 'images/modules/ajax.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360ajax',
						'id' : '/modules/ajax',
						'title' : 'Comentários',
						'url' : location.href + 'modules/ajax',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Criando APIs',
					icon : 'images/modules/apis.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360criandoapis',
						'id' : '/modules/criandoapis',
						'title' : 'Comentários',
						'url' : location.href + 'modules/criandoapis',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Contrib Admin',
					icon : 'images/modules/admin.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360contribadmin',
						'id' : '/modules/contribadmin',
						'title' : 'Comentários',
						'url' : location.href + 'modules/contribadmin',
					},
					chapters : [
						{
							name : 'ModelAdmin',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Contrib Auth',
					icon : 'images/modules/auth.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360contribauth',
						'id' : '/modules/contribauth',
						'title' : 'Comentários',
						'url' : location.href + 'modules/contribauth',
					},
					chapters : [
						{
							name : 'User Model',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Emails',
					icon : 'images/modules/emails.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360emails',
						'id' : '/modules/emails',
						'title' : 'Comentários',
						'url' : location.href + 'modules/emails',
					},
					chapters : [
						{
							name : 'Mandrill',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Testes automatizados',
					icon : 'images/modules/tests.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360testesautomatizados',
						'id' : '/modules/testesautomatizados',
						'title' : 'Comentários',
						'url' : location.href + 'modules/testesautomatizados',
					},
					chapters : [
						{
							name : 'Test Driven Development',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Caching',
					icon : 'images/modules/cache.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360caching',
						'id' : '/modules/caching',
						'title' : 'Comentários',
						'url' : location.href + 'modules/caching',
					},
					chapters : [
						{
							name : 'Caching',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Deployment',
					icon : 'images/modules/deployment.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360deployment',
						'id' : '/modules/deployment',
						'title' : 'Comentários',
						'url' : location.href + 'modules/deployment',
					},
					chapters : [
						{
							name : 'Heroku',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Python Social Auth',
					icon : 'images/modules/social.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360pythonsocialauth',
						'id' : '/modules/pythonsocialauth',
						'title' : 'Comentários',
						'url' : location.href + 'modules/pythonsocialauth',
					},
					chapters : [
						{
							name : 'Python Social Auth',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Pagamentos',
					icon : 'images/modules/payment.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360pagamentos',
						'id' : '/modules/pagamentos',
						'title' : 'Comentários',
						'url' : location.href + 'modules/pagamentos',
					},
					chapters : [
						{
							name : 'Paypal',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Celery',
					icon : 'images/modules/celery.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360celery',
						'id' : '/modules/celery',
						'title' : 'Comentários',
						'url' : location.href + 'modules/celery',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Segurança',
					icon : 'images/modules/security.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360seguranca',
						'id' : '/modules/seguranca',
						'title' : 'Comentários',
						'url' : location.href + 'modules/seguranca',
					},
					chapters : [
						{
							name : 'Segurança em Django',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Otimização',
					icon : 'images/modules/optimization.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360otimizacao',
						'id' : '/modules/otimizacao',
						'title' : 'Comentários',
						'url' : location.href + 'modules/otimizacao',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Relatórios',
					icon : 'images/modules/reports.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360relatorios',
						'id' : '/modules/relatorios',
						'title' : 'Comentários',
						'url' : location.href + 'modules/relatorios',
					},
					chapters : [
						{
							name : 'Relatórios em PDF',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Bonus: Integrando com Tornado',
					icon : 'images/modules/tornado.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360tornado',
						'id' : '/modules/tornado',
						'title' : 'Comentários',
						'url' : location.href + 'modules/tornado',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Bonus: Integrando com NodeJs',
					icon : 'images/modules/nodejs.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360nodejs',
						'id' : '/modules/nodejs',
						'title' : 'Comentários',
						'url' : location.href + 'modules/nodejs',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Bonus: Integrando com AngularJs',
					icon : 'images/modules/angularjs.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360angularjs',
						'id' : '/modules/angularjs',
						'title' : 'Comentários',
						'url' : location.href + 'modules/angularjs',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
				{
					name : 'Projeto prático',
					icon : 'images/modules/project.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360projetopratico',
						'id' : '/modules/projetopratico',
						'title' : 'Comentários',
						'url' : location.href + 'modules/projetopratico',
					},
					chapters : [
						{
							name : 'Criando o projeto prático',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						}
					]
				},
				{
					name : 'Django 1.7 para 1.8',
					icon : 'images/modules/upgrade_dj.png',
					about : 'Sobre',
					type : 'silver',
					disqus : {
						'shortname' : 'dj360django17para18',
						'id' : '/modules/django17para18',
						'title' : 'Comentários',
						'url' : location.href + 'modules/django17para18',
					},
					chapters : [
						{
							name : 'Introdução',

							video : {
								url : 'link',
								time : '0:00'
							},
							pdf : {
								url : 'link'
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
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
							},
							git : {
								url : 'link',
								gist : 'link',
							}
						},
					]
				},
			];
		}
	]);