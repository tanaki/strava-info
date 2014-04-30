'use strict';

angular
	.module("StravApp.Directives.BlockAnim", [])
	.directive("blockAnimation", function ($animate) {
		return function ( scope, element, attrs ) {

			scope.$watch(attrs.blockAnimation, function(newVal) {

				if ( newVal ) {
					$animate.addClass(element, "showBlock");
				} else {
					$animate.removeClass(element, "showBlock");
				}
			});

		};
	})
	.animation(".showBlock", function() {
		
		return {
			enter : function(element) {
				TweenLite.fromTo( element, 0.6, { transform : 'translate3d(0,-400px,0)' }, { transform : 'translate3d(0,0,0)', ease : Expo.easeInOut } );
			},
			leave : function(element) {
				TweenLite.fromTo( element, 0.6, { transform : 'translate3d(0,0,0)' }, { transform : 'translate3d(0,-400px,0)', ease : Expo.easeInOut } );
			}
		};
	})