class leaves_check extends ActionHandler{
    constructor(postion_id){
        super('leave','leaves_check');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity,"leaves_id":this.leaves_id,"leaves_check_state":$('#check_state').val()};
        return JSON.stringify(data);
    }
    set_leaves_id(id){
        this.leaves_id = id;
        this.run();
    }
    ajaxsuccess(result){
        alert('送出完畢!');
        (new search_leave_page("control")).run();
    }
}