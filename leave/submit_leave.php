<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class submit_leave{
    function actionPerformed(event_message $em){
        $account_id=$em->getPost()['data']['account_id'];
        $account_identity=$em->getPost()['data']['account_identity'];
        $leave_date=$em->getPost()['data']['leave_date'];
        $leave_kind=$em->getPost()['data']['leave_kind'];
        $leave_reason=$em->getPost()['data']['leave_reason'];
        $leave_lesson=implode(",",$em->getPost()['data']['leave_lesson']);
        $leave_check_state="未批准";
        $sql_conn = (new sql())->getconn();
        //if($account_identity == 'student'){
            $query = 'INSERT INTO `leaves`(`leaves_day`, `leaves_kind`, `leaves_reason`, `leaves_check_state`, `leaves_lesson`, `student_id`) VALUES (:leave_date,:leave_kind,:leave_reason,:leave_check_state,:leave_lesson,:account_id)';
        //}
        $submit = $sql_conn -> prepare($query);
        
        $submit->bindParam(":leave_date",$leave_date);
        $submit->bindParam(":leave_kind",$leave_kind);
        $submit->bindParam(":leave_reason",$leave_reason);
        $submit->bindParam(":leave_check_state",$leave_check_state);
        $submit->bindParam(":leave_lesson",$leave_lesson);
        $submit->bindParam(":account_id",$account_id);
        $submit->execute();
        return json_encode(array("code"=>200));
    }
    
}
?>
