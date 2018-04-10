<?php
require_once 'include/event_message.php';

$em = new event_message($_GET['data'],$_POST['data']);

$module = $em->getPost()['module'];


require_once $module.'/Action_Dispatcher.php';

echo (new Action_Dispatcher())->doAction($em);

?>