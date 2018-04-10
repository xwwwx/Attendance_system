class show_administer_home_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        $('#'+this.postion_id).html("請稍後..");
        let html=`
        <button onclick='(new show_course_page("control")).run()'>課程管理</button><br/>
        <button onclick='(new show_account_home_page("control")).show()'>全系人員資料管理</button><br/>
        <button onclick='(new show_personal_data_page("control")).run()'>個人資料管理</button><br/>
        `;
        let self = this;
        this.loadscript('course','show_course_page');
        this.loadscript('account','show_account_home_page');
        this.loadscript('personal_data','show_personal_data_page',function(){
            $('#'+self.postion_id).html(html);
        });
        
    }
}