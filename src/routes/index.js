import express from "express";
import itemRouter from "./module/venue_route";

const route = express.Router();

export default function router() {
	route.get("/", (req, res) => {
		res.send("Hello World!");
	});

	route.use("/items", itemRouter());

	return route;
}
