'use strict';
/**
 * @ngdoc type
 * @name name
 * @author cfpperche - 2014
 * @description # description
 */

angular.module('app.directives.youtube', [
	'youtube-embed'
])

.directive('appYoutube', [
	'$window',
	'$document',
	'$sce',
	function($window, $document, $sce) {

		return {
			restrict : 'E',
			scope : {
				youtube_url : "@youtubeUrl",
				readyToBind : "@"
			},
			template : '<div class="embed-responsive embed-responsive-16by9">' + '<youtube-video class="embed-responsive-item" video-id="youtube_url"></youtube-video>' + '</div>',
			link : function(scope, element, attr) {
				if (typeof scope.youtube_url === 'undefined') {
					throw "Please ensure that the `youtube_url` attribute is set.";
				};

				scope.$watch("readyToBind", function(isReady) {

					// If the directive has been called without the 'ready-to-bind' attribute, we
					// set the default to "true" so that Youtube will be loaded straight away.
					if (!angular.isDefined(isReady)) {
						isReady = "true";
					}

					if (scope.$eval(isReady)) {
						console.log(scope.youtube_url)
					}
				});
			}
		}
	}
]);