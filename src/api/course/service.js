const data = require("./data");

exports.getAllCourses = async (req) => {
  const courses = await data.allCourses();
  if (!courses) {
    throw new Error(err);
  }
  return courses;
};

exports.getCourseById = async (req) => {
  const id = req.params.id;
  const course = await data.courseById(id);
  if (!course) {
    throw new Error("Invalid Id");
  }
  return course;
};

exports.createCourse = async (req) => {
  const postCourse = {
    name: req.body.name,
    code: req.body.code,
  };
  if (!postCourse) {
    throw new Error("Invalid Body");
  }
  return await data.createCourse(postCourse);
};

exports.createCourses = async (req) => {
  const courseArray = req.body.course;
  if (!courseArray) {
    throw new Error("Invalid Body");
  }
  const postCourses = [];
  for (let i = 0; i < courseArray.length; i++) {
    if (courseArray[i].name && courseArray[i].code) {
      postCourses.push({
        name: courseArray[i].name,
        code: courseArray[i].code,
      });
    }
  }
  return await data.createCourses(postCourses);
};

exports.updateCourse = async (req) => {
  const id = req.params.id;
  if (!id) {
    throw new Error("Invalid id");
  }
  const updateJCourse = {
    name: req.body.name,
    code: req.body.code,
  };
  return await data.updateCourse(id, updateJCourse);
};

exports.deleteCourse = async (req) => {
  const id = req.params.id;
  if (!id) {
    throw new Error("Invalid id");
  }
  return await data.deleteCourse(id);
};
