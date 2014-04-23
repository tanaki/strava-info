'use strict';

angular
	.module('StravApp.Ctrl', [])
	.controller('AppCtrl', function AppCtrl( $scope, $location, $http ) {

		if ( $location.search().code ) {

			$http({
				url: "/api/get_token.php?code=" + $location.search().code,
				method: "GET"
			})
			.success(function(data, status, headers, config) {
				console.log("SUCCESS", data );
			})
			.error(function(data, status, headers, config) {
				console.log("ERROR");
			});
		} else {

			console.log("Please Login");
		}

	});
	