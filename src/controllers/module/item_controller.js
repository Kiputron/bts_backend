import { ErrorHandler, httpResponse } from "../../config/http";
import { db } from "../../models/";
//
const { items } = db.models;
export default {
	index: async (req, res, next) => {
		try {
			let data = await items.findAll();
			httpResponse(res, "success", "get all item successfully", data);
		} catch (err) {
			next(new ErrorHandler(err.message, err.status || 500));
		}
	},

	show: async (req, res, next) => {
		try {
			let data = await items.findByPk(req.params.id);
			httpResponse(res, "success", "get all item successfully", data);
		} catch (err) {
			next(new ErrorHandler(err.message, err.status || 500));
		}
	},
	store: async (req, res, next) => {
		try {
			let insertData = await items.create({
				...req.body,
			});
			httpResponse(
				res,
				"success",
				"get all item successfully",
				insertData,
				201
			);
		} catch (err) {
			next(new ErrorHandler(err.message, err.status || 500));
		}
	},
};
