<?php session_start(); ?>
<!doctype html>
<html ng-app="StravApp">
	<head>
		<meta charset="utf-8" />
		<title>Strava Info</title>

		<link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/style.css">

		<!-- LIBS -->
		<script type="text/javascript" src="js/libs/angular.js"></script>
		<!--script type="text/javascript" src="js/libs/angular-route.js"></script-->
		<!--script type="text/javascript" src="js/libs/angular-resource.js"></script-->
		<script type="text/javascript" src="js/libs/angular-animate.js"></script>
		<!--script type="text/javascript" src="../bower_components/d3/d3.js"></script-->

		<!-- App -->
		<script type="text/javascript" src="js/controllers/AppCtrl.js"></script>
		<script type="text/javascript" src="js/App.js"></script>
		
	</head>
	<body ng-controller="AppCtrl" ng-init="init(<?php echo isset($_SESSION['access_token']); ?>)">

		<div class="loader" ng-if="loading">
			<div>Loading</div>
		</div>

		<div class="error" ng-if="error">
			<div>Error</div>
		</div>

		<!-- Block Login -->
		<div class="block block-intro" ng-if="showLogin">

			<div class="intro">
				<h2>Strava Infographic</h2>
				<p>
					This website is an infographic based on your use of <a href="http://strava.com" target="_blank">Strava</a>.<br><br>
					It has been built with love by <a href="http://cargocollective.com/nicopigelet" target="_blank">Nicolas Pigelet</a><br>
					as a support to learn <a href="#" target="_blank">Angular JS</a> and <a href="#" target="_blank">D3.js</a><br><br><br>
					Please "Log in with Strava" to see your results.
				</p>
			</div>

			<a class="link-login" href="https://www.strava.com/oauth/authorize?client_id=242&response_type=code&redirect_uri=http://stravainfo.localhost&state=auth_ok&approval_prompt=auto">
				<img src="img/skin/LoginWithStrava@2x.png" width="157">
			</a>
		</div>

		<!-- Block Athlete -->
		<div class="block block-athlete" ng-if="!showLogin && !loading">

			<div class="athlete athlete-widget">
				
				<img ng-src="{{athlete.profile_medium}}">
				<span class="name">{{athlete.firstname}} {{athlete.lastname}}</span>
				<span class="location">{{athlete.city}} {{athlete.state}} {{athlete.country}}</span>

			</div>

			<div class="activities-overview">
				
				Animated Circle Chart : Run / Rides / Other

			</div>

			<a href="#">View more</a>

		</div>

		<!-- Block Runs -->
		<div class="block block-run block-hidden" ng-if="!showLogin && !loading">

			Runs

		</div>

		<!-- Block Rides -->
		<div class="block block-rides block-hidden" ng-if="!showLogin && !loading">

			Rides

		</div>

	</body>
</html>