<html>
<?php

/*if (isset($_POST['submit']))
{
  $dbconnection = mysqli_connect('localhost','root', '','firmstep');
  if ($dbconnection)
  {
  	echo "connection opened.";
  	$tupple = $_POST['queue'];
    $query=INSERT INTO service_que (Id, Type, Name, Service_Name, Queued_Time) VALUES ($tupple.id,$tupple.typeOfClient,$tupple.service,$tupple.name,$tupple.time_stamp);
    	$success = mysqli_query($dbconnection,$query);
    	if (!$success)
    	{
    		die('Can not insert record into the table', mysqli_error());
    	}

  }
  else
  {
  	die('error connecting to mySQL');
  }


}*/
echo "hello you reached to me";

?>
</html>
