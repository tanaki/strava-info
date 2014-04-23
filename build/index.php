<!doctype html>
<html ng-app="StravApp">
	<head>
		<meta charset="utf-8" />
		<title>Strava Info</title>

		<link rel="stylesheet" type="text/css" href="css/style.css">

		<!-- LIBS -->
		<script type="text/javascript" src="js/libs/angular.js"></script>
		<script type="text/javascript" src="js/libs/angular-route.js"></script>
		<!--script type="text/javascript" src="js/libs/angular-resource.js"></script-->
		<!--script type="text/javascript" src="../bower_components/angular-animate/angular-animate.js"></script>
		<script type="text/javascript" src="../bower_components/d3/d3.js"></script-->

		<!-- App -->
		<script type="text/javascript" src="js/controllers/AppCtrl.js"></script>
		<script type="text/javascript" src="js/App.js"></script>
		
	</head>
	<body ng-controller="AppCtrl">

		<a href="https://www.strava.com/oauth/authorize?client_id=242&response_type=code&redirect_uri=http://stravainfo.localhost&state=auth_ok&approval_prompt=auto">
			<img src="img/skin/LoginWithStrava@2x.png" width="157">
		</a>

	</body>
</html>