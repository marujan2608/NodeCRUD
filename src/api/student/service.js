
const data = require('./data');
exports.findAllStudents = (req, res) => {
    // return [{message : 'All Students'}];
    try{
        return data.allStudents();
    }catch(error){
        throw new Error(error);
    }
}