class ActionHandler{
    constructor(module,action){
        this.module = module;
        this.action = action;
        this.account_id = $.cookie('account_id');
        this.account_identity = $.cookie('account_identity');
        this.ajaxswitch=true;
    }
    run(){
        this.data=this.preparedata();
        var self = this;
        self.postdata = { module : self.module,action : self.action,data : JSON.parse(self.data)};
        if(self.ajaxswitch == true)
            $.ajax({
                        type: "POST",
                        url: "Module_Dispatcher.php",
                        data: {
                            data:JSON.stringify(self.postdata)
                            },
                        success: function(result) {
                            console.log(result);
                            if(JSON.parse(result)['code'] == 200){
                                self.ajaxsuccess(result);
                            }
                            else{
                                self.ajaxerror(result);
                            }
                        },
                        error: function(result) {
                            self.ajaxerror(result)
                        }
                    });
    }
    setajaxswitch(sw){
        this.ajaxswitch = sw;
    }
    loadscript(module,action,callback){
        let id = module+'_'+action;
        if(!document.getElementById(id)){
            let script = document.createElement("script");
            script.onload = callback;
            script.src = module+'/'+action+'.js';
            script.id = id;
            document.head.appendChild(script);
        }
        else{
            $('#'+id).attr("onload",callback);
        }
    }
    
}