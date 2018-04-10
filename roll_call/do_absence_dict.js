let absence_dict = {};

function add_absence(student_id,lesson){
    if(student_id in absence_dict){
        if(absence_dict[student_id].indexOf(lesson) == -1){
            absence_dict[student_id].push(lesson);
        }
    }
    else{
        absence_dict[student_id]=[lesson];
    }
    $('#'+student_id+'_'+lesson).text("曠");
    $('#'+student_id+'_'+lesson).attr("onclick","delete_absence("+student_id+","+lesson+")");
}
function delete_absence(student_id,lesson){
    if(student_id in absence_dict){
        if(absence_dict[student_id].indexOf(lesson) != -1){
            absence_dict[student_id].splice(absence_dict[student_id].indexOf(lesson),1)
        }
        if(absence_dict[student_id].length == 0){
            delete absence_dict[student_id];
        }
    }
    $('#'+student_id+'_'+lesson).html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    $('#'+student_id+'_'+lesson).attr("onclick","add_absence("+student_id+","+lesson+")");
    
}
function get_absence_dict(){
    return absence_dict;
}