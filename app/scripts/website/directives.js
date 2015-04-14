'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.website.directives', [])

.directive('stopEvent', [
	'$log',
	function($log) {
		return {
			restrict : 'A',
			link : function(scope, element, attr) {
				element.click(attr.stopEvent, function(e) {
					$log.debug(element);
					e.stopPropagation();
				});
			}
		};
	}
])

.directive('uiAccordion', [
	'$log',
	function($log) {
		return {
			restrict : 'EA',
			link : function(scope, element, attrs) {

				$(element).click(function(event) {

					var toggleBtn = event.target;

					if ($(toggleBtn).hasClass('collapsible') || $(toggleBtn).parent().hasClass('collapsible')) {

						$(element).find(".chapters").addClass('open').slideToggle('200', function() {
							// You may toggle + - icon
							$(element).find(".collapsible i").toggleClass('fa-eye  fa-eye-slash');
						});
					}
				});
			}
		}
	}
]);
// myApp.factory('myService', function() {});

