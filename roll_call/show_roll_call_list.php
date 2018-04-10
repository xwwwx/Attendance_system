<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
date_default_timezone_set('Asia/Taipei');
class show_roll_call_list implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $week = date('w');
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT * FROM `course` WHERE `course`.`teacher_id`= ? AND `course`.`course_day`=?;';
        $personal_data = $sql_conn -> prepare($query);
        $personal_data->execute(array($account_id,$week));
        $personal_data = $personal_data->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$personal_data));
    }
}
?>