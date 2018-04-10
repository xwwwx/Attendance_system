<?php
class event_message{
    private $post= null;
    private $get = null;
    function __construct($get,$post){
        $this->get=json_decode($get,true);
        $this->post=json_decode($post,true);
    }
    function getGet(){
        return $this->get;
    }
    function getPost(){
        return $this->post;
    }
}

?>
