<!-- <?php
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


$email_form = 'waleedaljrafi1@gmail.com';

$email_subject = 'new form submission'

$email_body = "User Name: $name\n".
              "User Email: $visitor_email\n".
              "Subject: $subject\n".
              "User Message: $$message\n";



$to = 'waleedaljrafi1@gmail.com';

$headers = "From: $email_form \r\n";

$headers = "Replay-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers)


header("location: contact.html")















?> -->