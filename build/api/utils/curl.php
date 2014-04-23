<?php

function req_curl( $url, $fields, $method = "post" ) {

	//url-ify the data for the POST
	foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
	rtrim($fields_string, '&');

	//open connection
	$ch = curl_init();

	//set the url, number of POST vars, POST data
	if ( $method == "post" ) {

		curl_setopt($ch,CURLOPT_URL, $url);
		curl_setopt($ch,CURLOPT_POST, count($fields));
		curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

	} else if ( $method == "get" ) {

		curl_setopt($ch,CURLOPT_URL, $url.'?'.$fields_string);
	}
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	//execute post
	$result = curl_exec($ch);

	//close connection
	curl_close($ch);

	return $result;
}

?>