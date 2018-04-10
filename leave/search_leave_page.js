class search_leave_page extends ActionHandler{
    constructor(postion_id){
        super('leave','search_leave');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity};
        return JSON.stringify(data);
    }
    ajaxsuccess(result){
        result = JSON.parse(result)
        result = result[0];
        if(this.account_identity == 'student'){
            let html = `
            <table border=1> 
                <tr>
                    <th>請假日期</th><th>請假種類</th><th>請假原因</th><th>請假節數</th><th>批准狀況</th>
                </tr>
            `;
                result.forEach(function(row){
                    
                    html +="<tr>"
                    html +="<td>"+row['leaves_day']+"</td><td>"+row['leaves_kind']+"</td><td>"+row['leaves_reason']+"</td><td>"+row['leaves_lesson']+"</td><td>"+row['leaves_check_state']+"</td>";
                    html +="</tr>";
                });
            html += `</table><br/>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            $('#'+this.postion_id).html(html);
        }
        if(this.account_identity == 'teacher'){
            let html = `
            <table border=1> 
                <tr>
                    <th>請假日期</th><th>學號</th><th>姓名</th><th>請假種類</th><th>請假原因</th><th>請假節數</th><th>批准狀況</th>
                </tr>
            `;
                result.forEach(function(row){
                    if(row['leaves_check_state'] !== '未批准'){
                        html +="<tr>"
                        html +=`<td>`+row['leaves_day']+`</td>
                            <td>`+row['student_id']+`</td>
                            <td>`+row['student_name']+`</td>
                            <td>`+row['leaves_kind']+`</td>
                            <td>`+row['leaves_reason']+`</td>
                            <td>`+row['leaves_lesson']+`</td>
                            <td>`+row['leaves_check_state']+`</td>`;
                        html +="</tr>";
                    }
                    if(row['leaves_check_state'] == '未批准'){
                        html +="<tr>"
                        html +=`<td>`+row['leaves_day']+`</td>
                            <td>`+row['student_id']+`</td>
                            <td>`+row['student_name']+`</td>
                            <td>`+row['leaves_kind']+`</td>
                            <td>`+row['leaves_reason']+`</td>
                            <td>`+row['leaves_lesson']+`</td>
                            <td>
                            <select id = 'check_state'>
                                <option value = '已批准'>批準</option>
                                <option value = '已否決'>否決</option>
                            </select>
                            <button onclick = '(new leaves_check("control")).set_leaves_id(`+row['leaves_id']+`)'>送出</button>
                            </td>`;
                        html +="</tr>";
                    }
                });
            html += `</table><br/>
            <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
            let self = this;
            this.loadscript('leave','leaves_check',function(){$('#'+self.postion_id).html(html);})
        }
        
    }
}