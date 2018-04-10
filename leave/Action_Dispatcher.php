<?php
require_once 'include/Module.php';
require_once 'include/event_message.php';
class Action_Dispatcher implements Module{
    function doAction(event_message $em){
    $action = $em->getPost()['action'];
    require_once $action.'.php';
    return (new $action())->actionPerformed($em);
    }
}
?>