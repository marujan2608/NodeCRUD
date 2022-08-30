// Define end points methods
// Handle req and res

const service = require('./service');
exports.getAllStudents = (req, res) => {
    // res.status(200).json({message : 'All Students'});
    try{
        res.status(200).json(service.findAllStudents());
    }catch(error){
        res.status(404).json({message : 'Not Found 404'});
    }
}

exports.createStudent = (req, res) => {
    res.status(200).json({message : 'Success'});
}