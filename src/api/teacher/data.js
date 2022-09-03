const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.dbName;

exports.allTeacher = async () => {
  try {
    await mongo.connect();
    const teacher = await mongo
      .db(dbName)
      .collection("teacher")
      .find({})
      .toArray();
    return teacher;
  } catch (error) {
    console.log(error);
    throw new Error(error);
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
