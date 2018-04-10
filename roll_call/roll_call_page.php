<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
date_default_timezone_set('Asia/Taipei');
class roll_call_page implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $course_id = $em->getPost()['data']['course_id'];
        $date = date("Ymd");
        $sql_conn = (new sql())->getconn();
        
        $query = 'SELECT * FROM `absence` WHERE `absence`.`course_id`=? AND `absence`.`absence_id` LIKE ?;';
        $roll_call = $sql_conn -> prepare($query);
        $roll_call->execute(array($course_id,$date."%"));
        $roll_call = $roll_call->fetchALL(PDO::FETCH_ASSOC);
        if(sizeof($roll_call) > 0){
            return json_encode(array("code"=>400,"message"=>'以經點過名了!'));
        }
        
        $query = 'SELECT * FROM `course_student` JOIN `student` ON `course_student`.`student_id`=`student`.`student_id` JOIN `class` ON `student`.`class_id` = `class`.`class_id` JOIN `course` ON `course_student`.`course_id` = `course`.`course_id` WHERE `course_student`.`course_id`= ?;';
        $roll_call = $sql_conn -> prepare($query);
        $roll_call->execute(array($course_id));
        $roll_call = $roll_call->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$roll_call));
    }
}
?>