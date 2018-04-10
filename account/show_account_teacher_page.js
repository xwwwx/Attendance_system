class show_account_teacher_page extends ActionHandler{
    constructor(postion_id){
        super('account','show_account_teacher_page');
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
                    <th>教師姓名</th><th>性別</th><th>EMAIL</th><th>生日</th>
                </tr>
            `;
                result.forEach(function(row){
                html +="<tr>"
                html +=`<td>`+row['teacher_name']+`</td>
                <td>`+row['teacher_gender']+`</td>
                <td>`+row['teacher_email']+`</td>
                <td>`+row['teacher_birthday']+`</td>
                `;
                html +="</tr>";
            });
            html += `</table><br/>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            let self=this;
            $('#'+this.postion_id).html(html);
            
    }
}