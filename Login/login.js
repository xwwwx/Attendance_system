class login extends ActionHandler{
    constructor(module,action,postion_id){
        super(module,action);
        this.postion_id=postion_id;
    }
    
    preparedata(){
        let account_id = $('#account_id').val();
        let account_pwd = $('#account_pwd').val();
        if(account_id =='' ||account_pwd == ''){
            this.setajaxswitch(false);
            alert('請輸入帳號及密碼');
        }
        let data = {account_id : account_id,account_pwd:account_pwd}
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        (new show_first_page(this.postion_id)).show();
    }
    ajaxerror(result){
        alert(JSON.parse(result)['message']);
        (new show_first_page("control")).show();
    }
}