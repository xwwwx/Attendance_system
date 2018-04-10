class update_password extends ActionHandler{
    constructor(postion_id){
        super('personal_data','update_password');
        this.postion_id = postion_id;
    }
    preparedata(){
        let new_pwd= $('#new_pwd').val();
        let new_pwd_chk = $('#new_pwd_chk').val();
        if(new_pwd !== new_pwd_chk){
            this.setajaxswitch(false);
            alert('新密碼及密碼確認不相同!');
            (new show_update_password_page('content')).show();
        }
        let data = {account_id : this.account_id, account_identity:this.account_identity,pwd:new_pwd};
        
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        
        alert('修改完成');
        $('#content').html("");
        (new show_personal_data_page(this.postion_id)).run();
    }
    ajaxerror(result){
        result = JSON.parse(result);
        alert(result['message']);
        (new show_update_email_page('content')).show();
        
    }
}