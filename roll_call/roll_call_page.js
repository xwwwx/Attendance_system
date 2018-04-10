class roll_call_page extends ActionHandler{
    constructor(postion_id){
        super('roll_call','roll_call_page');
        this.postion_id = postion_id;
    }
    preparedata(){
        let data = {account_id : this.account_id,account_identity:this.account_identity,"course_id":this.course_id};
        return JSON.stringify(data);
    }
    set_course_id(id){
        this.course_id = id;
        this.run()
    }
    ajaxsuccess(result){
        result = JSON.parse(result)
        result = result[0];
        let course_lesson = result[0]['course_lesson'].split(",");
        let course_id = result[0]['course_id'];
        let html = `
        <table border=1> 
            <tr>
                <th>學號</th><th>班級</th><th>姓名</th>
        `;
        course_lesson.forEach(function(row){
            html +=`<th>`+row+'</th>';
        });
        html +='</tr>'
        
        result.forEach(function(row){
            html +='<tr>';
            html +=`
            <td>`+row['student_id']+`</td>
            <td>`+row['class_name']+`</td>
            <td>`+row['student_name']+`</td>
            `;
            course_lesson.forEach(function(lesson){
                html +=`<td><div id = `+row['student_id']+`_`+lesson+` onclick = 'add_absence(`+row['student_id']+`,`+lesson+`)' >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div></td>`;
            })
            html +='</tr>';
        })
        html += `</table>`;
        html +=`
        <button onclick='(new roll_call("control")).set_course_id("`+course_id+`")'>送出</button>
        <button onclick='(new show_first_page("control")).show()'>返回首頁</button>
        `;
        let self = this;
        this.loadscript('roll_call','roll_call');
        this.loadscript('roll_call','do_absence_dict',function(){$('#'+self.postion_id).html(html);});
        
    }
    ajaxerror(result){
        result = JSON.parse(result);
        alert(result['message']);
        
    }
}