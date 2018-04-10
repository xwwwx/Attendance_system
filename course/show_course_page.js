class show_course_page extends ActionHandler{
    constructor(postion_id){
        super('course','show_course_page');
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
                <th>課堂名稱</th><th>教師</th><th>星期</th><th>節數</th><th>教室</th>
            </tr>
        `;
            result.forEach(function(row){
                html +="<tr>"
                html +=`<td>`+row['course_name']+`</td>
                <td>`+row['teacher_name']+`</td>
                <td>`+row['course_day']+`</td>
                <td>`+row['course_lesson']+`</td>
                <td>`+row['classroom']+`</td>
                </td>`;
                html +="</tr>";
            });
        html += `</table><br/>
        <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`;
        $('#'+this.postion_id).html(html);
        
    }
}