<?php
require_once 'event_message.php';
interface Action_Listener{
    public function actionPerformed(event_message $em);
}
?>