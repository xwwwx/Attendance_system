class delete_absence_detail extends ActionHandler{
    constructor(postion_id){
        super('absence','delete_absence_detail');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity,"absence_student_id":this.absence_student_id};
        return JSON.stringify(data);
    }
    set_absence_student_id(id){
        this.absence_student_id = id;
        this.run();
    }
    ajaxsuccess(result){
        alert('刪除完畢!');
        $('#content').html("");
        (new show_absence_select_page("control")).run();
    }
}