class show_student_home_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        $('#'+this.postion_id).html("請稍後..");
        let html=`
        <button onclick='(new show_absence_search_page("control")).run()'>缺曠查詢</button><br/>
        <button onclick='(new show_leave_page("control")).show()'>請假申請及查詢</button><br/>
        <button onclick='(new show_personal_data_page("control")).run()'>個人資料管理</button><br/>
        <button>選課系統</button><br/>
        `;
        let self = this;
        this.loadscript('absence','show_absence_search_page');
        this.loadscript('leave','show_leave_page');
        this.loadscript('personal_data','show_personal_data_page',function(){
            $('#'+self.postion_id).html(html);
        });
        
    }
}