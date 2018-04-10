class show_absence_search_page extends ActionHandler{
    constructor(postion_id){
        super('absence','show_absence_search_page');
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
                <th>日期</th><th>曠課節數</th><th>課程名稱</th>
            </tr>
        `;
            result.forEach(function(row){
                html +="<tr>"
                html +="<td>"+row['absence_id'].substring(0,4)+'/'+row['absence_id'].substring(4,6)+'/'+row['absence_id'].substring(6,8)+"</td><td>"+row['absence_lesson']+"</td><td>"+row['course_name']+"</td>";
                html +="</tr>";
            });
        html += `</table><br/>
        <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`
        $('#'+this.postion_id).html(html);
    }
}