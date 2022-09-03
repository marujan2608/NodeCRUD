
const mongo = require('../../db/mongo');
const dbName = require('../../config/db').mongo.dbName;

exports.allStudents = async () => {
    try{
        await mongo.connect();
        const student = await mongo.db(dbName).collection("student").find({}).toArray();
        return student;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }finally{
        mongo.close();
    }
}
