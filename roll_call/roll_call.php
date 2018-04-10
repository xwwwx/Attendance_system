<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
date_default_timezone_set('Asia/Taipei');
class roll_call implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $date = date("Ymdhis");
        $course_id = $em->getPost()['data']['course_id'];
        $absence_dict = $em->getPost()['data']['absence_dict'];
        $sql_conn = (new sql())->getconn();
        $query = 'INSERT INTO `absence`(`absence_id`, `course_id`) VALUES (?,?);';
        $roll_call = $sql_conn -> prepare($query);
        $roll_call->execute(array($date,$course_id));
        $roll_call = $roll_call->fetchALL(PDO::FETCH_ASSOC);
        foreach($absence_dict as $key=> $value){
            $query = 'INSERT INTO `absence_student`( `absence_id`, `absence_lesson`, `student_id`) VALUES (?,?,?);';
            $roll_call = $sql_conn -> prepare($query);
            $roll_call->execute(array($date,implode($value,","),$key));
            $roll_call = $roll_call->fetchALL(PDO::FETCH_ASSOC);
        }
        return json_encode(array("code"=>200));
    }
}
?>