'use strict';

angular
	.module('StravApp.Ctrl', [])
	.controller('AppCtrl', function AppCtrl( $scope, $location, $http, stravapi ) {

		$scope.block = {};

		$scope.init = function( hasAccess ) {

			$scope.showLogin = false;
			$scope.hasError = false;

			if ( hasAccess ) {

				$scope.loading = true;
				stravapi.getAthlete( onSuccessLogin );

			} else if ( $location.search().code ) {

				$scope.loading = true;
				stravapi.getToken($location.search().code, onSuccessLogin );
				
			} else {

				$scope.showLogin = true;
				console.log("Please Login");
			}

		};

		var onSuccessLogin = function(data) {

			$scope.block.athlete = data;

			stravapi.getActivities( onSuccessActivities );
		};

		var onSuccessActivities = function( data ) {

			$scope.activities = data;

			var 
				rides = [],
				runs = [],
				others = [],
				
				runTime = 0,
				rideTime = 0,
				otherTime = 0,
				
				runDistance = 0,
				rideDistance = 0,
				otherDistance = 0,

				hours = [];

			for ( var i = 0; i < 24; i++ ) {
				hours[i] = 0;
			}
			
			angular.forEach( $scope.activities, function(activity) {

				// Hours
				var h = new Date(activity.start_date_local).getHours();
				hours[h]++;

				// Activities Types
				if ( activity.type == "Ride" ) {

					rideDistance += activity.distance;
					rideTime += activity.moving_time;
					rides.push( activity );

				} else if ( activity.type != "Run" ) {

					runDistance += activity.distance;
					runTime += activity.moving_time;
					runs.push( activity );

				} else {

					otherDistance += activity.distance;
					otherTime += activity.moving_time;
					others.push( activity );
				}

				// console.log( activity );
			});
			
			// console.log( $scope.activities.location_city, $scope.activities.location_state, $scope.activities.location_country );

			$scope.block.activities = {
				"data" : $scope.activities,
				"rides" : {
					"data" : rides,
					"time" : rideTime,
					"distance" : rideDistance
				},
				"runs" : {
					"data" : runs,
					"time" : runTime,
					"distance" : runDistance
				},
				"others" : {
					"data" : others,
					"time" : otherTime,
					"distance" : otherDistance
				}
			};

			$scope.block.hours = hours;
			$scope.loading = false;
		};

		$scope.showBlock = function(id) {
			return !!$scope.block[id];
		};

	});
	