<?php
class sql{
    function getconn(){
        $content = file_get_contents("include/config.json");
		$content = json_decode($content,true);
		$dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8',$content['db']['db_addr'],$content['db']['db_name']);
		$conn = new PDO($dsn,$content['db']['db_user'],$content['db']['db_pass']);
		return $conn;
    }
}
?>

