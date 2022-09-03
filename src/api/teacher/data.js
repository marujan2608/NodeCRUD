const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.dbName;

exports.allTeacher = async () => {
  try {
    await mongo.connect();
    const teachers = await mongo
      .db(dbName)
      .collection("teacher")
      .find({})
      .toArray();
    return teachers;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  } finally {
    mongo.close();
  }
};

exports.teacherById = async () => {
  try {
    await mongo.connect();
    const teacher = await mongo.db(dbName).collection("teacher").findOne();
    return teacher;
  } catch (err) {
    console.log(err);
  } finally {
    mongo.close();
  }
};

exports.createTeacher = async (teacherAdd) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teacher")
    .insertOne(teacherAdd);
  mongo.close();
  return insertedId;
};
