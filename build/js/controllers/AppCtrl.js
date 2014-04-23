'use strict';

angular
	.module('StravApp.Ctrl', [])
	.controller('AppCtrl', function AppCtrl( $scope, $location, $http ) {

		$scope.init = function( hasAccess ) {

			$scope.showLogin = false;
			$scope.hasError = false;

			if ( hasAccess ) {

				$scope.loading = true;

				$http
					.get("/api/get_athlete.php")
					.success($scope.onSuccess)
					.error($scope.onError);

			} else if ( $location.search().code ) {

				$scope.loading = true;

				$http
					.get("/api/get_token.php?code=" + $location.search().code)
					.success($scope.onSuccess)
					.error($scope.onError);

			} else {

				$scope.showLogin = true;
				console.log("Please Login");
			}

		};

		$scope.onSuccess = function(data) {
			$scope.loading = false;
			$scope.athlete = data;
		};

		$scope.onError = function() {
			$scope.loading = false;
			$scope.hasError = true;
		};

		

	});
	