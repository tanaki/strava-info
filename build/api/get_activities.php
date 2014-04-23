<?php

session_start();

header('Content-type: application/json');

$per_page = 15;
$access_token = $_SESSION['access_token'];

$url = 'https://www.strava.com/api/v3/activities';
$url .= '?access_token=' . urlencode($access_token);
$url .= '&per_page=' . urlencode($per_page);

echo file_get_contents($url);

?>

