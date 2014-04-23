<?php

session_start();

header('Content-type: application/json');

include( "utils/curl.php" );

$code = $_GET['code'];
$client_id = "242";
$client_secret = "1156bdd01e5679547af4ac46bce0722964704f06";

// set POST variables
$url = "https://www.strava.com/oauth/token";
$fields = array(
	'client_id' => urlencode($client_id),
	'client_secret' => urlencode($client_secret),
	'code' => urlencode($code)
);

$result = json_decode(req_curl( $url, $fields ));

$_SESSION['access_token'] = $result->access_token;
echo json_encode($result->athlete);

?>