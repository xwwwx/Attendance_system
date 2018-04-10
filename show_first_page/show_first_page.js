class show_first_page extends ActionHandler{
    constructor(postion_id){
        super('example','example');
        this.postion_id=postion_id;
    }
   show(){
       $('#content').html(" ");
        let account_id = $.cookie('account_id')
        let account_identity = $.cookie('account_identity');
        let self = this;
        if (account_id === undefined || account_identity === undefined){
            this.loadscript('Login','show_login_page',function(){
                let show = (new show_login_page(self.postion_id)).show();
            });
        }
        else{
            if(account_identity === 'teacher'){
                this.loadscript('teacher_home_page','show_teacher_home_page',function(){
                    let show = (new show_teacher_home_page(self.postion_id)).show();
                });
            }
            if(account_identity === 'student'){
                this.loadscript('student_home_page','show_student_home_page',function(){
                    let show = (new show_student_home_page(self.postion_id)).show();
                });
            }
            if(account_identity === 'administer'){
                this.loadscript('administer_home_page','show_administer_home_page',function(){
                    let show = (new show_administer_home_page(self.postion_id)).show();
                });
            }
        }
        
    }
}