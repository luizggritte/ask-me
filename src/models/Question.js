const sequelize = require("sequelize");

const connection = require("../services/database");

const Question = connection.define("questions", {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({ force: false });

module.exports = Question;
