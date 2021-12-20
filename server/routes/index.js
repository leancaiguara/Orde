const router = require("express").Router();

const taskRouter = require("./task");

router.use("/task", taskRouter);

module.exports = router;
