class show_account_home_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        let html=`
        <button onclick='(new show_account_student_page("content")).run()'>學生列表</button>
        <button onclick='(new show_account_teacher_page("content")).run()'>教師列表</button>
        <button onclick='(new show_account_administer_page("content")).run()'>行政人員列表</button>
        `;
        let self=this;
        this.loadscript('account','show_account_student_page');
        this.loadscript('account','show_account_teacher_page');
        this.loadscript('account','show_account_administer_page',function(){$('#'+self.postion_id).html(html);});
    }
}