const questionModel = require("../models/Question");
const answerModel = require("../models/Answer");

module.exports = {
	async index(req, res) {
		questionModel.findAll({ raw: true, order: [["id", "DESC"]] })
			.then(questions => {
				return res.render("index", { questions });
			});
	},

	async show(req, res) {
		const { id } = req.params;

		questionModel.findOne({ where: { id } })
			.then(question => {
				if (question != undefined) {
					answerModel.findAll({ where: { questionId: id } })
						.then(answers => {
						if (answers != undefined)
							res.render("question", { question, answers });
					});
				} else res.redirect("/");
		});
	},

	async create(req, res) {
		var { title, description } = req.body;

    questionModel.create({ title, description })
			.then(() => { res.redirect("/") });
	}
};
