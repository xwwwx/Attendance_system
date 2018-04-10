class show_update_email_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(email){
        let html = `
        新EMAIL:
        <input type='text' id='email' value='`+email+`'>
        <br/>
        <button onclick='(new update_email("control")).run()'>送出</button>`;
        let self = this;
        this.loadscript('personal_data','update_email',function(){
            $('#'+self.postion_id).html(html);
        })
    }
}