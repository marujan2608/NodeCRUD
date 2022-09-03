
const service = require('./service');

exports.getAllTeachers = async (req, res) => {
    try{
        const teachers = await service.getAllTeachers();
        res.status(200).json({isError: false, data: teachers});
    }catch(err){
        res.status(400).json({isError: true, message: err.message});
    }
}

exports.getTeacherById = async (req, res) => {
    try{
        const teacher = await service.getTeacherById();
        res.status(200).json({isError: false, data: teacher});
    }catch(err){
        res.status(400).json({isError: true, message: err.message});
    }
}

exports.createTeacher = async (req, res) => {
    try{
        const addTeacher = await service.createTeacher(req);
        res.status(200).json({isError: false, data: addTeacher});
    }catch(err){
        res.status(400).json({isError: true, message: err.message});
    }
}