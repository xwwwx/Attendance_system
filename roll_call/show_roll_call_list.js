class show_roll_call_list extends ActionHandler{
    constructor(postion_id){
        super('roll_call','show_roll_call_list');
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
                <th>課程名稱</th><th>節數</th><th>點名</th>
            </tr>
        `;
        result.forEach(function(row){
            html +="<tr>";
            html +=
            `<td>`+row['course_name']+`</td>
            <td>`+row['course_lesson']+`</td>
            <td><button onclick='(new roll_call_page("control")).set_course_id("`+row['course_id']+`")'>點名</button></td>`;
            html +=`</tr>`;
        });
        html += `</table><br/>
        <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`;
        let self=this;
        this.loadscript('roll_call','roll_call_page',function(){$('#'+self.postion_id).html(html);})
            
    }
}