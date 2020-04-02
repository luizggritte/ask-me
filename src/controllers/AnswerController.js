const answerModel = require("../models/Answer");

module.exports = {
  async create(req, res) {
    const { answer, questionId } = req.body;

		answerModel.create({ answer, questionId })
			.then(() => { res.redirect("/question/" + questionId) });
  }
};
