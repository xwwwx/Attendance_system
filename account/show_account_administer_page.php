<?php
require_once 'include/event_message.php';
require_once 'include/Action_Listener.php';
require_once 'include/sql.php';
class show_account_administer_page implements Action_Listener{
    public function actionPerformed(event_message $em){
        $account_id = $em->getPost()['data']['account_id'];
        $account_identity = $em->getPost()['data']['account_identity'];
        $sql_conn = (new sql())->getconn();
        $query = 'SELECT `administer`.`administer_name`,`administer`.administer_email,`administer`.`administer_gender`,`administer`.`administer_birthday` FROM `account` JOIN `administer` ON `account`.`account_id` = `administer`.`administer_id`;';
        $show_administer = $sql_conn->prepare($query);
        $show_administer->execute(array($account_id));
        $show_administer = $show_administer->fetchALL(PDO::FETCH_ASSOC);
        return json_encode(array("code"=>200,$show_administer));
    }
}
?>