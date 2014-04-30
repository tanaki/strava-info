'use strict';

angular
	.module('StravApp', [
		'ngAnimate',
		
		'StravApp.Ctrl',
		'StravApp.Factory',
		'StravApp.Directives'
	])
	.config(function ( $locationProvider ) {

		$locationProvider.html5Mode(true);
	});