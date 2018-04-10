<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_account_student_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `student`.`student_name`,`student`.student_email,`student`.`student_gender`,`student`.`student_birthday`,`class`.`class_name` FROM `account` JOIN `student` ON `account`.`account_id` = `student`.`student_id` JOIN `class` ON `student`.`class_id` = `class`.`class_id`;';
        $show_student = $sql_conn->prepare($query);
        $show_student->execute(array($account_id));
        $show_student = $show_student->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$show_student));
    }
}
?>