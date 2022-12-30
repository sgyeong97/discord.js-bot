const Sequelize = require("sequelize");

module.exports = {
	connect: new Sequelize("database", "user", "password", {
		host: "localhost",
		dialect: "sqlite",
		logging: false,
		storage: "database.sqlite",
	}),
	execute(database) {
		return new Sequelize("database", "user", "password", {
			host: "localhost",
			dialect: "sqlite",
			logging: false,
			storage: database + ".sqlite",
		});
	},
};
