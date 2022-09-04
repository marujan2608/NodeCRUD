const service = require("./service");

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await service.getAllTeachers(req);
    res.status(200).json({ isError: false, data: teachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await service.getTeacherById(req);
    console.log(teacher);
    res.status(200).json({ isError: false, data: teacher });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const addTeacher = await service.createTeacher(req);
    res.status(200).json({ isError: false, data: addTeacher });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};
exports.createTeachers = async (req, res) => {
  try {
    const addTeachers = await service.createTeachers(req);
    res.status(200).json({ isError: false, data: addTeachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const updateTeacher = await service.updateTeacher(req);
    res.status(200).json({ isError: false, data: updateTeacher });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const deleteTeacher = await service.deleteTeacher(req);
    res.status(200).json({ isError: false, data: deleteTeacher });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};
