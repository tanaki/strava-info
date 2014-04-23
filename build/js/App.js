'use strict';

angular
	.module('StravApp', [
		'ngRoute',
		'StravApp.Ctrl'
	])
	.config(function ( $locationProvider, $httpProvider, $routeProvider ) {

		$locationProvider.html5Mode(true);
		delete $httpProvider.defaults.headers.common["X-Requested-With"];

		/*
		$routeProvider
			.when('/', {
				templateUrl: 'views/intro.html',
				controller: 'IntroController'
			})
			.when('/runs', {
				templateUrl: 'views/runs.html',
				controller: 'RunsController'
			})
			.when('/rides', {
				templateUrl: 'views/rides.html',
				controller: 'RidesController'
			})
			.when('/others', {
				templateUrl: 'views/others.html',
				controller: 'OthersController'
			})
			.otherwise({
				redirectTo: '/'
			});
		*/
	});