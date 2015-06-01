'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.directives.slideshare', [])

.directive('appSlideshare', [
	'$window',
	'$document',
	'$sce',
	function($window, $document, $sce) {

		return {
			restrict : 'E',
			scope : {
				slideshare_url : "@slideshareUrl",
				readyToBind : "@"
			},
			template : '<div class="embed-responsive embed-responsive-16by9">' + '<iframe ng-src="{{slideshare_url_sce}}" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="embed-responsive-item" style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" allowfullscreen> </iframe>' + '</div>',
			link : function(scope, element, attr) {

				if (typeof scope.slideshare_url === 'undefined') {
					throw "Please ensure that the `slideshare_url` attribute is set.";
				};

				scope.$watch("readyToBind", function(isReady) {

					// If the directive has been called without the 'ready-to-bind' attribute, we
					// set the default to "true" so that Youtube will be loaded straight away.
					if (!angular.isDefined(isReady)) {
						isReady = "true";
					}

					if (scope.$eval(isReady)) {

						scope.slideshare_url_sce = $sce.trustAsResourceUrl(scope.slideshare_url);
					}
				});
			}
		}
	}
]);