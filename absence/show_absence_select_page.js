class show_absence_select_page extends ActionHandler{
    constructor(postion_id){
        super('absence','show_absence_select_page');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity};
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        result = JSON.parse(result)
        result = result[0];
            let html = `
            <table border=1> 
                <tr>
                    <th>日期</th><th>課程名稱</th><th>詳細</th>
                </tr>
            `;
                result.forEach(function(row){
                    html +="<tr>"
                    html +="<td>"+row['absence_id'].substring(0,4)+'/'+row['absence_id'].substring(4,6)+'/'+row['absence_id'].substring(6,8)+"</td><td>"+row['course_name']+`</td><td><button onclick='(new show_absence_detail("content")).set_course_id(`+row['absence_id']+`)'>詳細內容</button></td>`;
                    html +="</tr>";
                });
            html += `</table><br/>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            let self=this;
            this.loadscript('absence','show_absence_detail',function(){$('#'+self.postion_id).html(html);})
            
    }
}