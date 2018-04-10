class submit_leave_page extends ActionHandler{
    constructor(postion_id){
        super('leave','submit_leave');
        this.postion_id = postion_id;
    }
    preparedata(){
        let leave_year=$('#year').val();
        let leave_month=$('#month').val();
        let leave_day=$('#day').val();
        let leave_kind=$('#leave_kind').val();
        let leave_reason=$('#leave_reason').val();
        let leave_lesson=[];
        let i;
        let chk = $("input[name='leave_lesson[]']")
        for(i = 0;i<chk.length;i++){
            if(chk[i].checked == true){
                leave_lesson.push(chk[i].value);
            }
        }
        let data = {account_id : this.account_id,account_identity:this.account_identity,"leave_date":leave_year+'-'+leave_month+'-'+leave_day,"leave_reason":leave_reason,"leave_lesson":leave_lesson,"leave_kind":leave_kind};
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        alert("請假完成!");
        (new show_first_page('control')).show();
    }
}