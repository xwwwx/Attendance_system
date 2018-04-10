class show_login_page extends ActionHandler{
    constructor(postion_id){
        super('none','none');
        this.postion_id = postion_id;
    }
    show(){
        let html=`
        帳號:
        <input type="text" id="account_id"><br/>
        密碼:
        <input type="password" id="account_pwd"><br/>
        
        <button onclick="(new login('Login','Login','control')).run()">登入</button>
        
        `;
        this.loadscript('Login','login');
        $('#'+this.postion_id).html(html);
        
    }
}