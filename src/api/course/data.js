const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.dbName;
const { ObjectId } = require("mongodb");

exports.allCourses = async () => {
  await mongo.connect();
  const courses = await mongo
    .db(dbName)
    .collection("course")
    .find({})
    .toArray();
  mongo.close();
  return courses;
};

exports.courseById = async (id) => {
  await mongo.connect();
  const course = await mongo
    .db(dbName)
    .collection("course")
    .findOne({ _id: new ObjectId(id) });
  mongo.close();
  return course;
};

exports.createCourse = async (courseAdd) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("course")
    .insertOne(courseAdd);
  mongo.close();
  return insertedId;
};

exports.createCourses = async (postCourses) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("course")
    .insertMany(postCourses);
  mongo.close();
  return insertedId;
};

exports.updateCourse = async (id, updateJCourse) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("course")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateJCourse });
  mongo.close();
  return insertedId;
};

exports.deleteCourse = async (id) => {
  await mongo.connect();
  const deleteCourse = await mongo
    .db(dbName)
    .collection("course")
    .deleteOne({ _id: new ObjectId(id) });
  mongo.close();
  return deleteCourse;
};
