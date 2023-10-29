const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const studentsRoutes = require("./students.routes")
router.use("/students", studentsRoutes)

module.exports = router;
