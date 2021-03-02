<?php
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$location = htmlspecialchars($_POST["location"]);
$nationality = htmlspecialchars($_POST["nationality"]);
$gender = htmlspecialchars($_POST["gender"]);
$job_applied = htmlspecialchars($_POST["job_applied"]);
$refferer = getenv('HTTP_REFERER');
$date = date("d.m.y"); // число.месяц.год
$time = date("H:i"); // часы:минуты:секунды
$link = htmlspecialchars($_POST["link_mail"]);
//$myemail = "drakon2000@ukr.net";
//$myemail = "sedraksargsyan90@gmail.com";

	$tema = "Application from the site";
	$message_to_myemail = "Received a new application from the site:
	<table style='width: 100%;'>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Name:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
	</tr>

	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>
			<b>Location</b>
		</td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$location</td>
	</tr>

	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Nationality:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$nationality</td>
	</tr>

	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Gender:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$gender</td>
	</tr>

	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>job applied to:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$job_applied</td>
	</tr>

	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Application time:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$date / $time/ $refferer</td>
	</tr>
	</table><br>
	<a download href='$refferer/leads.txt'>Download the full list of applications in txt-format</a><br><br>
	<a download href='$refferer/uploads/$name_file'>Download CV-файл</a>
	";

mail($myemail, $tema, $message_to_myemail, "From: join Whites <$myemail> \r\n"."Content-type: text/html; charset=utf-8\r\n" );

$file_1 = 'leads.txt';
$tofile_1 = "===================================================================\n
	Request from site:\n
	Customer's name: $name\n
	Location: $location \n
	Nationality: $nationality \n
	Gender: $gender \n
	Job_applied: $job_applied \n
	Application Time: $date / $time\n
	Refferer: $refferer\n\n";
file_put_contents($file_1, $bom . $tofile_1 . file_get_contents($file_1));
?>