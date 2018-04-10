<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class search_leave implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        if($account_identity == 'student'){
            $query = 'SELECT * FROM `leaves` WHERE `student_id`=?;';
        }
        if($account_identity == 'teacher'){
            $query = 'SELECT * FROM `leaves` JOIN `student` ON `leaves`.`student_id`=`student`.`student_id` JOIN `class` ON `student`.`class_id` = `class`.`class_id` WHERE `class`.`teacher_id` = ?;';
        }
        $search_leave = $sql_conn -> prepare($query);
        $search_leave->execute(array($account_id));
        $search_leave = $search_leave->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$search_leave));
    }
}
?>