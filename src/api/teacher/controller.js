
const service = require('./service');

exports.getAllTeachers = async (req, res) => {
    try{
        const teacher = await service.getAllTeachers();
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