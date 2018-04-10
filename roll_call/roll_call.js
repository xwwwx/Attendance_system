class roll_call extends ActionHandler{
    constructor(postion_id){
        super('roll_call','roll_call');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : $.cookie("account_id"),account_identity:$.cookie("account_identity"),"absence_dict":get_absence_dict(),"course_id":this.course_id};
        return JSON.stringify(data);
    }
    set_course_id(id){
        this.course_id =id;
        this.run();
    }
   ajaxsuccess(result){
       alert('點名完成!');
       (new show_first_page('control')).show();
   }
}