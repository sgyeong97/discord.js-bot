const path = require("node:path");
const fs = require("node:fs");

try {
	const DBPath = path.join(__dirname, "DB");
	const dbFile = fs
		.readdirSync(DBPath)
		.filter((file) => file.endsWith(".js"));
	let sequelize;
	for (const file of dbFile) {
		const filePath = path.join(DBPath, file);
		const DB = require(filePath);
		sequelize = DB.connect;
	}

	const modelPath = path.join(__dirname, "models");
	const modelFiles = fs
		.readdirSync(modelPath)
		.filter((file) => file.endsWith(".js"));

	for (const file of modelFiles) {
		const filePath = path.join(modelPath, file);
		const Model = require(filePath);
		let tags = Model.create(sequelize);
		console.log(tags);
	}
} catch (err) {
	console.log(err);
}
