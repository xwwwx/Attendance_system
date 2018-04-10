class show_personal_data_page extends ActionHandler{
    constructor(postion_id){
        super('personal_data','show_personal_data');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : $.cookie("account_id"),account_identity:$.cookie("account_identity")};
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        result = JSON.parse(result);
        result = result[0];
        let html;
        if(result['identity'] == 'student'){
            
            html=`
            學號:`+result['student_id']+`<br/>
            姓名:`+result['student_name']+`<br/>
            性別:`+result['student_gender']+`<br/>
            生日:`+result['student_birthday']+`<br/>
            EMAIL:`+result['student_email']+`<button onclick='(new show_update_email_page("content")).show("`+result['student_email']+`")'>修改</button><br/>
            班級:`+result['class_name']+`<br/>
            <button onclick='(new show_update_password_page("content")).show()'>修改密碼</button>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            ;
        }
        if(result['identity'] == 'teacher'){
            
            html=`
            教師編號:`+result['teacher_id']+`<br/>
            姓名:`+result['teacher_name']+`<br/>
            性別:`+result['teacher_gender']+`<br/>
            生日:`+result['teacher_birthday']+`<br/>
            EMAIL:`+result['teacher_email']+`<button onclick='(new show_update_email_page("content")).show("`+result['teacher_email']+`")'>修改</button><br/>
            <button onclick='(new show_update_password_page("content")).show()'>修改密碼</button>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            ;
        }
        if(result['identity'] == 'administer'){
            html=`
            管理員編號:`+result['administer_id']+`<br/>
            姓名:`+result['administer_name']+`<br/>
            性別:`+result['administer_gender']+`<br/>
            生日:`+result['administer_birthday']+`<br/>
            EMAIL:`+result['administer_email']+`<button onclick='(new show_update_email_page("content")).show("`+result['administer_email']+`")'>修改</button><br/>
            <button onclick='(new show_update_password_page("content")).show()'>修改密碼</button>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            ;
        }
        let self=this;
        this.loadscript('personal_data','show_update_password_page');
        this.loadscript('personal_data','show_update_email_page',function(){
            $('#'+self.postion_id).html(html);
        })
        
    }
}