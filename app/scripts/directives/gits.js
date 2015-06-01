'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.directives.gist', [
	'gist-embed'
])

.directive('appGist', [
	'$window',
	'$document',
	'$sce',
	function($window, $document, $sce) {

		return {
			restrict : 'E',
			scope : {
				gist : '@',
				readyToBind : "@"
			},
			// template : '<code data-gist-id="9050052" data-gist-line="0-10"></code>',
			link : function(scope, element, attr) {
				if (typeof scope.gist === 'undefined') {
					throw "Please ensure that the `gist` attribute is set.";
				};

				scope.$watch("readyToBind", function(isReady) {

					// If the directive has been called without the 'ready-to-bind' attribute, we
					// set the default to "true" so that Disqus will be loaded straight away.
					if (!angular.isDefined(isReady)) {
						isReady = "true";
					}

					if (scope.$eval(isReady)) {
						var $code = $('<code data-gist-id="' + scope.gist + '">');
						$code.appendTo(element).gist();
					}
				});
			}
		}
	}
]);