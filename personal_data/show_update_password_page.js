class show_update_password_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        let html = `
        新密碼:
        <input type='password' id='new_pwd' value=''>
        <br/>
        新密碼確認:
        <input type='password' id='new_pwd_chk' value=''>
        <br/>
        <button onclick='(new update_password("control")).run()'>送出</button>`;
        let self = this;
        this.loadscript('personal_data','update_password',function(){
            $('#'+self.postion_id).html(html);
        })
    }
}