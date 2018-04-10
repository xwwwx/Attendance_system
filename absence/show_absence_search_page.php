<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_absence_search_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `absence`.`absence_id` , `absence_student`.`absence_lesson`,`course`.`course_name` FROM `absence_student` JOIN `absence` ON `absence_student`.`absence_id` = `absence`.`absence_id` JOIN `course` ON `absence`.`course_id`=`course`.`course_id` WHERE `absence_student`.`student_id`= ?;';
        $absence_search = $sql_conn->prepare($query);
        $absence_search->execute(array($account_id));
        $absence_search = $absence_search->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$absence_search));
    }
}
?>