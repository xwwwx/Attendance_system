<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class update_email implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $email = $em->getPost()['data']['email'];
        if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
            return json_encode(array("code"=>404,"message" => "請輸入正確的email格式!"+$email));
        }
        if($account_identity == 'student'){
            $query = "UPDATE `student` SET `student_email`= ? WHERE `student_id` = ?;";
        }
        if($account_identity == 'teacher'){
            $query = "UPDATE `teacher` SET `teacher_email`= ? WHERE `teacher_id` = ?;";
        }
        if($account_identity == 'administer'){
            $query = "UPDATE `administer` SET `administer_email`= ? WHERE `administer_id` = ?;";
        }
        $sql_conn = (new sql())->getconn();
        $update_email = $sql_conn->prepare($query);
        $update_email->execute(array($email,$account_id));
        
        return json_encode(array("code"=>200));
    }
}
?>