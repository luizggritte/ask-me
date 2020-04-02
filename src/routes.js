const router = require('express').Router();

const QuestionController = require("./controllers/QuestionController");
const AnswerController = require("./controllers/AnswerController");

router.get("/ask", (req, res) => { res.render("ask") });

router.get("/", QuestionController.index);
router.get("/question/:id", QuestionController.show);
router.post("/savequestion", QuestionController.create);

router.post("/reply", AnswerController.create);

router.use("*", (req, res) => { res.redirect("/") });

module.exports = router;
