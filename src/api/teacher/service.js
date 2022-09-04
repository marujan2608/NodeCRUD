const data = require("./data");

exports.getAllTeachers = async (req) => {
  const teachers = await data.allTeacher();
  if (!teachers) {
    throw new Error(err);
  }
  return teachers;
};

exports.getTeacherById = async (req) => {
  const id = req.params.id;
  const teacher = await data.teacherById(id);
  if (!teacher) {
    throw new Error("Invalid Id");
  }
  return teacher;
};

exports.createTeacher = async (req) => {
  // const sam = {
  //     std:{
  //         name:"d",
  //         courses:[
  //             {name:"32", fee:"3232"},
  //             {name:"432", fee:"3232"},
  //         ],
  //         age:"232"
  //     }
  // }
  // const {name,age, std:{courses}} = sam
  // return name;
  const postTeacher = {
    name: req.body.name,
    age: req.body.age,
    nickName: req?.body?.nickName,
  };
  if (!postTeacher) {
    throw new Error("Invalid Body");
  }
  return await data.createTeacher(postTeacher);
};

exports.createTeachers = async (req) => {
  const teacherArray = req.body.teacher;
  if (!teacherArray) {
    throw new Error("Invalid Body");
  }
  const postTeachers = [];
  for (let i = 0; i < teacherArray.length; i++) {
    if (teacherArray[i].name && teacherArray[i].age) {
      postTeachers.push({
        name: teacherArray[i].name,
        age: teacherArray[i].age,
      });
    }
  }
  return await data.createTeachers(postTeachers);
};

exports.updateTeacher = async (req) => {
  const id = req.params.id;
  if (!id) {
    throw new Error("Invalid id");
  }
  const updateJTeacher = {
    name: req.body.name,
    age: req.body.age,
    nickName: req?.body?.nickName,
  };
  return await data.updateTeacher(id, updateJTeacher);
};

exports.deleteTeacher = async (req) => {
  const id = req.params.id;
  if (!id) {
    throw new Error("Invalid id");
  }
  return await data.deleteTeacher(id);
};
