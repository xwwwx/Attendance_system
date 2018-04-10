class make_leave_page extends ActionHandler{
    constructor(postion_id){
        super('show','show');
        this.postion_id = postion_id;
    }
    show(){
        let i;
        let dateformate='DD/MM/YYYY';
        let nowyear = new Date().getFullYear()-1;
        let html=`欲請假日期:</br>
        <select id="year">`;
        for(i=0;i<2;i++){
            html += "<option value='"+(nowyear+i)+"'>"+(nowyear+i)+"</option>";
        }
        html += `</select>年
        <select id = "month">`;
        for(i=1;i<13;i++){
            html += "<option value='"+i+"'>"+i+"</option>";
        }
        html +='</select>月<select id = "day">';
        for(i=1;i<32;i++){
            html += "<option value='"+i+"'>"+i+"</option>";
        }
        html +='</select>日<br/>';
        html +=`
        請假種類:
        <select name = 'leave_kind' id = 'leave_kind'>
            <option value='事'>事</option>
            <option value='病'>病</option>
            <option value='喪'>喪</option>
            <option value='公'>公</option>
        </select>
        <br/>
        請假事由:<input type='text' id='leave_reason'>
        <br/>
        請假節數:
        <br/>
        <input name = "leave_lesson[]" type = "checkbox" value="M">M&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="1">1&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="2">2&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="3">3&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="4">4&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="A">A&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="5">5&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="6">6&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="7">7&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="8">8&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="B">B&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="11">11&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="12">12&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="13">13&nbsp&nbsp&nbsp
        <input name = "leave_lesson[]"  type = "checkbox" value="14">14&nbsp&nbsp&nbsp
        <br/>
        <button onclick='(new submit_leave_page("control")).run()'>送出</button>
        <button onclick='(new show_first_page("control")).show()'>返回首頁</button>`;
        let self = this;
        this.loadscript('leave','submit_leave_page',function(){$('#'+self.postion_id).html(html);})
    }
}