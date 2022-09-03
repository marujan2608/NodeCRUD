const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.dbName;
const {ObjectId} = require('mongodb')
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

exports.teacherById = async (id) => {
  await mongo.connect();
  const teacher = await mongo.db(dbName).collection("teacher").findOne({_id: new ObjectId(id)});
  mongo.close();
  return teacher;
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

exports.createTeachers = async (postTeachers) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teacher")
    .insertMany(postTeachers);
  mongo.close();
  return insertedId;
}

exports.updateTeacher = async (id, updateJTeacher) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teacher")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateJTeacher });
    mongo.close();
  return insertedId;
};

exports.deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;
  try {
    await mongo.connect();
    const deleteTeacher = await mongo
      .db(dbName)
      .collection("teacher")
      .deleteOne({ _id: teacherId });
    return deleteTeacher;
  } catch (err) {
    console.log(err);
  } finally {
    mongo.close();
  }
};
