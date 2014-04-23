'use strict';

angular
	.module('StravApp', [
		'ngAnimate',
		'StravApp.Ctrl'
	])
	.config(function ( $locationProvider ) {

		$locationProvider.html5Mode(true);
	});