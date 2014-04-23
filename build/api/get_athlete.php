<?php

session_start();

header('Content-type: application/json');

$access_token = $_SESSION['access_token'];

$url = 'https://www.strava.com/api/v3/athlete';
$url .= '?access_token=' . urlencode($access_token);

echo file_get_contents($url);

?>

