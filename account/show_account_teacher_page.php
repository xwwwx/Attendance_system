<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_account_teacher_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `teacher`.`teacher_name`,`teacher`.teacher_email,`teacher`.`teacher_gender`,`teacher`.`teacher_birthday` FROM `account` JOIN `teacher` ON `account`.`account_id` = `teacher`.`teacher_id`;';
        $show_teacher = $sql_conn->prepare($query);
        $show_teacher->execute(array($account_id));
        $show_teacher = $show_teacher->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$show_teacher));
    }
}
?>