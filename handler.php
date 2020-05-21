 <?php
$to = "nastyasushentsova1@gmail.com, awesomemdl95@gmail.com";
$tema = "Заявка на ремонт";
$message = "ФИО: ".$_POST['name'] ."\r\n";
$message .= "Причина обращения: ".$_POST['model'] ."\r\n";
$message .= "Помощь в которой вы нуждаетесь: ".$_POST['help'];
$headers = 'From: tv-master@tv-oskol.ru' . "\r\n" .
    'Reply-To: tv-master@tv-oskol.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    "Content-Type: text/html; charset=UTF-8";
mail($to, $tema, $message, $headers);
?>