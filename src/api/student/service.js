
const data = require('./data');
exports.findAllStudents = async (req, res) => {
    try{
        const student = await data.allStudents();
        console.log(student);
        return student;
    }catch(error){
        throw new Error(error);
    }
}