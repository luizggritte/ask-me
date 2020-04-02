const sequelize = require("sequelize");

const connection = require("../services/database");

const Answer = connection.define("answers", {
    answer: {
        type: sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Answer.sync({ force: false });

module.exports = Answer;
