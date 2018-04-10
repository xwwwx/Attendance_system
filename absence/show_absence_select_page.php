<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_absence_select_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `absence`.`absence_id`,`course`.`course_id`,`course`.`course_name` FROM `absence` JOIN `course` ON `absence`.`course_id` = `course`.`course_id` WHERE `course`.`teacher_id`= ?;';
        $absence_select = $sql_conn->prepare($query);
        $absence_select->execute(array($account_id));
        $absence_select = $absence_select->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$absence_select));
    }
}
?>