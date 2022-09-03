// Define end points methods
// Handle req and res

const service = require('./service');

exports.getAllStudents = async (req, res) => {
    try{
        const student = await service.findAllStudents();
        res.status(200).json(student);
    }catch(error){
        res.status(404).json({message : 'Not Found 404'});
    }
}

exports.createStudent = (req, res) => {
    res.status(200).json({message : 'Success'});
}