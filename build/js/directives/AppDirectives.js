'use strict';

angular.module('StravApp.Directives', [
		'StravApp.Directives.BlockAnim',
		'StravApp.Directives.HoursChart'
	])
	.directive("loadingAnimation", function($animate) {
		return function ( scope, element, attrs ) {

			scope.$watch(attrs.loadingAnimation, function(newVal) {

				if ( newVal ) {
					TweenLite.to( element, 0.3, { transform : 'scale(1,1)', ease : Expo.easeInOut } );
				} else {
					TweenLite.to( element, 0.3, { transform : 'scale(0,0)', ease : Expo.easeInOut } );
				}
			});

		};
	});