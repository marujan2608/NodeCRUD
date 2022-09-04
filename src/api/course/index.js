const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAllCourses);
router.get("/:id", controller.getCourseById);
router.post("/", controller.createCourse);
router.post("/add-courses", controller.createCourses);
router.patch("/:id", controller.updateCourse);
router.delete("/:id", controller.deleteCourse);

module.exports = router;
