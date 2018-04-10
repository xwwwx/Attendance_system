<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class leaves_check implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $leaves_id = $em->getPost()['data']['leaves_id'];
        $leaves_check_state = $em->getPost()['data']['leaves_check_state'];
        $sql_conn = (new sql())->getconn();
        $query = 'UPDATE `leaves` SET `leaves_check_state`= ? WHERE `leaves_id` = ?;';
        $leaves_check = $sql_conn->prepare($query);
        $leaves_check->execute(array($leaves_check_state,$leaves_id));
        $leaves_check = $leaves_check->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200));
    }
}
?>