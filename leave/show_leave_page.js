class show_leave_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        let html=`<button onclick='(new make_leave_page("control")).show()'>請假</button><button onclick='(new search_leave_page("control")).run()'>請假查詢</button>`;
        let self=this;
        this.loadscript('leave','search_leave_page');
        this.loadscript('leave','make_leave_page',function(){$('#'+self.postion_id).html(html);});
        
    }
}