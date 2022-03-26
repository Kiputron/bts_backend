import express from "express";
import { ItemController } from "../../controllers";

const route = express.Router();

export default function itemRouter() {
	route.get("/", ItemController.index);
	route.post("/", ItemController.store);
	route.get("/:id", ItemController.show);

	return route;
}
