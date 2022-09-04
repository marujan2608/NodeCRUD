const service = require("./service");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await service.getAllCourses(req);
    res.status(200).json({ isError: false, data: courses });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await service.getCourseById(req);
    res.status(200).json({ isError: false, data: course });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const addCourse = await service.createCourse(req);
    res.status(200).json({ isError: false, data: addCourse });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.createCourses = async (req, res) => {
  try {
    const addCourses = await service.createCourses(req);
    res.status(200).json({ isError: false, data: addCourses });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const updateCourse = await service.updateCourse(req);
    res.status(200).json({ isError: false, data: updateCourse });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deleteCourse = await service.deleteCourse(req);
    res.status(200).json({ isError: false, data: deleteCourse });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};
