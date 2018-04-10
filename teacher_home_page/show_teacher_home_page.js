class show_teacher_home_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        $('#'+this.postion_id).html("請稍後..");
        let html=`
        <button onclick='(new show_roll_call_list("control")).run()'>點名</button><br/>
        <button onclick='(new show_absence_select_page("control")).run()'>缺曠查詢</button><br/>
        <button onclick='(new search_leave_page("control")).run()'>請假批准及查詢</button><br/>
        <button onclick='(new show_personal_data_page("control")).run()'>個人資料管理</button><br/>
        `;
        let self = this;
        this.loadscript('roll_call','show_roll_call_list');
        this.loadscript('absence','show_absence_select_page');
        this.loadscript('leave','search_leave_page');
        this.loadscript('personal_data','show_personal_data_page',function(){
            $('#'+self.postion_id).html(html);
        });
        
    }
}