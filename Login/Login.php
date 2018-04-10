<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class Login implements Action_Listener{
    function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_pwd = $em->getPost()['data']['account_pwd'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT * FROM `account` WHERE `account_id` = ? AND `account_password` = ?;';
        $account_src = $sql_conn->prepare($query);
        $account_src->execute(array($account_id,$account_pwd));
        $pwd = $account_src->fetchALL(PDO::FETCH_ASSOC);
        if(count($pwd) != 0){
            setcookie("account_id",$pwd[0]['account_id']);
            setcookie("account_identity",$pwd[0]['identity']);
            
            $back = array("code"=>200,$pwd);
            return json_encode($back);
            
        }
        else{
            $back = array("code"=>404,"message"=>"帳號或密碼錯誤");
            return json_encode($back);
        }
    }
}
?>