<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class delete_absence_detail implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $absence_student_id = $em->getPost()['data']['absence_student_id'];
        $sql_conn = (new sql())->getconn();
        $query = 'DELETE FROM `absence_student` WHERE `absence_student_id` =?;';
        $selete_absence_detail = $sql_conn->prepare($query);
        $selete_absence_detail->execute(array($absence_student_id));
        $selete_absence_detail = $selete_absence_detail->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200));
    }
}
?>