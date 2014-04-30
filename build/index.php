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
		<script type="text/javascript" src="js/libs/d3.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.7/TweenMax.min.js"></script>

		<!-- App -->
		<script type="text/javascript" src="js/filters/AppFilters.js"></script>

		<script type="text/javascript" src="js/directives/animations/BlockAnim.js"></script>
		<script type="text/javascript" src="js/directives/charts/HoursChart.js"></script>
		<script type="text/javascript" src="js/directives/AppDirectives.js"></script>

		<script type="text/javascript" src="js/controllers/AppCtrl.js"></script>
		<script type="text/javascript" src="js/factories/AppFactory.js"></script>
		<script type="text/javascript" src="js/App.js"></script>
		
	</head>
	<body ng-controller="AppCtrl" ng-init="init(<?php echo isset($_SESSION['access_token']); ?>)">

		<div class="loader" ng-if="!showBlock('activities')" loading-animation="!showBlock('activities')"></div>
		
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
					as a support to learn <a href="https://angularjs.org/" target="_blank">Angular JS</a> and <a href="http://d3js.org/" target="_blank">D3.js</a><br><br><br>
					Please "Log in with Strava" to see your results.
				</p>
			</div>

			<div class="intro-links">
				<a class="link-login" href="https://www.strava.com/oauth/authorize?client_id=242&response_type=code&redirect_uri=http://stravainfo.localhost&state=auth_ok&approval_prompt=auto">
					<img src="img/skin/LoginWithStrava@2x.png" width="157">
				</a>

				<a class="link-visualize" href="#">Visualize without Strava account</a>
			</div>
		</div>

		<!-- Block Athlete -->
		<div class="block block-athlete" ng-if="showBlock('activities')" block-animation="block.activities">

			<div class="athlete-details">
				<img ng-src="{{block.athlete.profile_medium}}">
				<span class="name">{{block.athlete.firstname}} {{block.athlete.lastname}}</span>
				<span class="location">{{block.athlete.country}}</span>
			</div>

			<div class="chart">
				<h3>{{ block.activities.data.length }} last activities :</h3>
				<div class="donut-chart"></div>
			</div>

		</div>

		<!-- Block Hours -->
		<div class="block block-hours" ng-if="showBlock('hours')" block-animation="block.hours">

			<h3 class="block-title">What time of the day do you run ?</h3>
			<div class="hours-chart"></div>
			
		</div>

		<!-- Block Map -->
		<div class="block block-map" ng-show="showBlock('map')">

			Map

		</div>

		<!-- Block Map -->
		<div class="block block-run-pb" ng-show="showBlock('run')">

			Run - Evolution of PBs in Time

		</div>

		<!-- Block Map -->
		<div class="block block-run-world-record" ng-show="showBlock('run')">

			Run - World Records

		</div>

		<!-- Block Map -->
		<div class="block block-ride-kom" ng-show="showBlock('ride')">

			Ride - KOM

		</div>

	</body>
</html>