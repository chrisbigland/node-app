const Router = require("express");
const students = require("../controllers/students.controller.js")
const router = Router();



router.get("/", students.findAll
);

// make 3 more endpoints for 
// 1. get a specific student
router.get("/:id", students.find
);

// 2. post (make) a new student
router.post("/", students.create
);

// 3. delete a student
router.delete("/:id", students.destroy
);

module.exports = router;
