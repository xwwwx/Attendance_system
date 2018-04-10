class update_email extends ActionHandler{
    constructor(postion_id){
        super('personal_data','update_email');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id, account_identity:this.account_identity,email:$('#email').val()}
        
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