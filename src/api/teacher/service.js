const data = require('./data');

exports.getAllTeachers = async (req, res) => {
    try{
        const teachers = await data.allTeacher();
        return teachers;
    }catch(err){
        throw new Error(err);
    }
}

exports.getTeacherById = async (req) => {
    const id = req.params.id;
    const teacher = await data.teacherById(id);
    console.log(teacher);
    console.log(id);
    if(!teacher){
        throw new Error("Invalid Id");
    }
    return teacher;
}

exports.createTeacher = async (req, res) => {
    // const sam = {
    //     std:{
    //         name:"d",
    //         courses:[
    //             {name:"32", fee:"3232"},
    //             {name:"432", fee:"3232"},
    //         ],
    //         age:"232"
    //     }
    // }
    // const {name,age, std:{courses}} = sam
    // return name;
    if(req.body.name && req.body.age){
        const postTeacher = {
            name: req.body.name,
            age: req.body.age,
            nickName: req?.body?.nickName,
        };
        return data.createTeacher(postTeacher);
    }
    else{
        throw new Error("Invalid Body");
    }
}

exports.createTeachers = async (req) => {
    const teacherArray= req.body.teachers;
    if(!teacherArray){
        throw new Error("Invalid Body");
    }
    const postTeachers =[];
    for(let i=0; i<teacherArray.length; i++){
        if(teacherArray[i].name && teacherArray[i].age) {
            postTeachers.push({
                name: teacherArray[i].name,
                age: teacherArray[i].age
            })
        }
        
    }
    return data.createTeachers(postTeachers);
}

exports.updateTeacher = async (req) => {
    const id = req.params.id;
    if(!id){
        throw new Error("Invalid Body");
    }
    const updateJTeacher = {
        name: req.body.name,
        age: req.body.age,
        nickName: req?.body?.nickName,
    };
    return data.updateTeacher(id, updateJTeacher);
}

exports.deleteTeacher = async (req, res) => {
    const teacherId = req.params.id;
    try{
        const deleteTeacher =  await data.deleteTeacher(teacherId);
        return deleteTeacher;
    }catch(err){
        throw new Error(err);
    }
}