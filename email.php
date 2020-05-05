<?php
	ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $sender_email = $_POST['email'];
    $to = "smccowan33@gmail.com";
    $subject = "BioinfoCore - New Message";
    $message = $_POST['message']."\n".$sender_name = $_POST['name']."\n".$sender_email."\n".$sender_phone = $_POST['phone']."\n";
    $headers = "From:" . $sender_email;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
/*
    $myfile = fopen("lastemail.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $message);
	fclose($myfile);
*/
?>
