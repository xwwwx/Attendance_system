class show_absence_detail extends ActionHandler{
    constructor(postion_id){
        super('absence','show_absence_detail');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity,"absence_id":this.absence_id};
        return JSON.stringify(data);
    }
    set_course_id(id){
        this.absence_id = id;
        console.log(this.absence_id);
        this.run();
    }
    ajaxsuccess(result){
        result = JSON.parse(result)
        result = result[0];
        let html = `
        <table border=1> 
            <tr>
                <th>日期</th><th>學號</th><th>姓名</th><th>曠課節數</th><th>刪除</th>
            </tr>
        `;
            result.forEach(function(row){
                html +="<tr>"
                html +="<td>"+row['absence_id'].substring(0,4)+'/'+row['absence_id'].substring(4,6)+'/'+row['absence_id'].substring(6,8)+"</td><td>"+row['student_id']+"</td><td>"+row['student_name']+"</td><td>"+row['absence_lesson']+`</td><td><button onclick='(new delete_absence_detail("control")).set_absence_student_id(`+row['absence_student_id']+`)'>刪除</button></td>`;
                html +="</tr>";
            });
        html += `</table><br/>`
        let self=this;
        this.loadscript('absence','delete_absence_detail',function(){$('#'+self.postion_id).html(html);})
        
    }
}