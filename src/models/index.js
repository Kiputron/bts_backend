require("dotenv").config({ path: __dirname + "/../../.env" });
import Sequelize from "sequelize";
import fs from "fs";
import setupRelations from "./relation_setup";
import config from "../config/config.json";
import logger from "../utils/logger";
const MODE = process.env.MODE || "test";

// noinspection JSValidateTypes
const db = new Sequelize(
	config[MODE].database,
	config[MODE].username,
	config[MODE].password,
	{
		dialect: config[MODE].dialect,
		host: config[MODE].host,
		logging: false,
		define: {
			underscored: true,
			underscoredAll: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
			paranoid: true,
		},
	}
);

async function connectionCheck() {
	return db
		.authenticate()
		.then(() => logger.info("Connection Database Successfully!"))
		.catch((err) => logger.info(err.original));
}

let files = fs.readdirSync(__dirname + "/");
for (let f of files) {
	if (f.indexOf("index.js") >= 0) continue;
	if (f.indexOf("relation_setup.js") >= 0) continue;
	if (f.indexOf("migrations") >= 0) continue;
	if (f.indexOf(".log") >= 0) continue;
	db.import("./" + f);
}

db.Sequelize = Sequelize;

setupRelations(db);

export { db, connectionCheck };
