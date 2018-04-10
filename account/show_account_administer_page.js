class show_account_administer_page extends ActionHandler{
    constructor(postion_id){
        super('account','show_account_administer_page');
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
                    <th>行政人員姓名</th><th>性別</th><th>EMAIL</th><th>生日</th><th>班級</th>
                </tr>
            `;
                result.forEach(function(row){
                html +="<tr>"
                html +=`<td>`+row['administer_name']+`</td>
                <td>`+row['administer_gender']+`</td>
                <td>`+row['administer_email']+`</td>
                <td>`+row['administer_birthday']+`</td>
                <td>`+row['class_name']+`</td>`;
                html +="</tr>";
            });
            html += `</table><br/>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            $('#'+this.postion_id).html(html);
            
    }
}