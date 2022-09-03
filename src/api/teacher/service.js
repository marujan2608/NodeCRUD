const data = require('./data');

exports.getAllTeachers = async (req, res) => {
    try{
        const teachers = await data.allTeacher();
        return teachers;
    }catch(err){
        throw new Error(err);
    }
}

exports.getTeacherById = async (req, res) => {
    try{
        const teacher = await data.teacherById();
        return teacher;
    }catch(err){
        throw new Error(err);
    }
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