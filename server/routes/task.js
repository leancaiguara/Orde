const router = require("express").Router();
const taskCtrl = require("../controllers/taskCtrl");

router.get("/", taskCtrl.getAll);

router.get("/completed", taskCtrl.allCompleted);

router.get("/incompleted", taskCtrl.notCompleted);

router.post("/add", taskCtrl.create);

router.put("/edit/:id", taskCtrl.edit);

router.put("/", taskCtrl.complete);

router.delete("/:id", taskCtrl.remove);

module.exports = router;
