<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_course_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT * FROM `course` JOIN `teacher` ON `course`.`teacher_id` = `teacher`.`teacher_id` JOIN `class` ON `course`.`class_id`=`class`.`class_id`;';
        $show_course = $sql_conn->prepare($query);
        $show_course->execute(array($account_id));
        $show_course = $show_course->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$show_course));
    }
}
?>