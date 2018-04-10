<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_personal_data implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        if($account_identity == 'student'){
            $query = 'SELECT `student_id`,`student_name`,`student_email`,`student_gender`,`student_birthday`,`class_name`,`identity` FROM `account` JOIN `student` ON `account`.`account_id`=`student`.`student_id` JOIN `class` ON `student`.`class_id`=`class`.`class_id` WHERE `account`.`account_id`= ?;';
        }
        if($account_identity == 'teacher'){
            $query = 'SELECT `teacher_id`,`teacher_name`,`teacher_email`,`teacher_gender`,`teacher_birthday`,`identity` FROM `account` JOIN `teacher` ON `account`.`account_id`=`teacher`.`teacher_id` WHERE `account`.`account_id`= ?;';
        }
        if($account_identity == 'administer'){
            $query = 'SELECT `administer_id`,`administer_name`,`administer_email`,`administer_gender`,`administer_birthday`,`identity` FROM `account` JOIN `administer` ON `account`.`account_id`=`administer`.`administer_id` WHERE `account`.`account_id`= ?;';
        }
        $personal_data = $sql_conn -> prepare($query);
        $personal_data->execute(array($account_id));
        $personal_data = $personal_data->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$personal_data[0]));
    }
}
?>