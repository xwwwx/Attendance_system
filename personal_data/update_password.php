<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class update_password implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $new_pwd = $em->getPost()['data']['pwd'];
        
        $query = "UPDATE `account` SET `account_password`= ? WHERE `account_id` = ?;";
        
        
        $sql_conn = (new sql())->getconn();
        $update_email = $sql_conn->prepare($query);
        $update_email->execute(array($new_pwd,$account_id));
        
        return json_encode(array("code"=>200,$update_email->errorinfo()));
    }
}
?>