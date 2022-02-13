<?php

    // server-side processing

    $errors = '';
    $myemail = '2025.cse24.arnabmukherjee@gmail.com';//<-----setting my email address here.


    if(empty($_POST['name'])  || empty($_POST['phnumber']) || empty($_POST['email']) || empty($_POST['message']))
    {
        $errors .= "\n Error: all fields are required";
    }

    $name = $_POST['name'];
    $phone = $_POST['phnumber'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",$email_address))
    {
        $errors .= "\n Error: Invalid email address";
    }
    

    // sending of the mail 

    if( empty($errors))
    {
        $to = $myemail;
        $email_subject = "Contact form submission: $name";
        $email_body = "You have received a new message. "." Here are the details:\n Name: $name \n ".
        "Phone Number: $phone \n Email: $email_address\n\n Message: \n $message";
        $headers = "From: $myemail\n";
        $headers .= "Reply-To: $email_address";
        mail($to,$email_subject,$email_body,$headers);

        //redirect to the 'thank you' page
        header('Location: /thankYou.html')
    }
?>