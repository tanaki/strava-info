
angular
	.module('StravApp.Factory', [])
	.factory('stravapi', function( $http ){

		return {

			getToken : function (code, callback){

				$http({
					method: 'GET',
					url: '/api/get_token.php?code=' + code,
					cache: true
				}).success(callback);
			},

			getAthlete : function( callback ){

				$http({
					method: 'GET',
					url: '/api/get_athlete.php',
					cache: true
				}).success(callback);
			},

			getActivities : function( callback ){
				$http({
					method: 'GET',
					url: '/api/get_activities.php',
					cache: true
				}).success(callback);
			}
		};

	});