<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_absence_detail implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $absence_id = $em->getPost()['data']['absence_id'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `absence`.`absence_id`,`student`.`student_id`,`student`.`student_name`,`absence_student`.`absence_lesson`,`absence_student`.`absence_student_id` FROM `absence` JOIN `absence_student` ON `absence`.`absence_id` = `absence_student`.`absence_id` JOIN `student` ON `absence_student`.`student_id` = `student`.`student_id` WHERE `absence`.`absence_id`= ?;';
        $absence_detail = $sql_conn->prepare($query);
        $absence_detail->execute(array($absence_id));
        $absence_detail = $absence_detail->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$absence_detail));
    }
}
?>