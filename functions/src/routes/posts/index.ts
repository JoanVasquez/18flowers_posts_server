import express, { Router } from "express";
import list from "./list";
import update from "./update";

// main file containing our middleware to process req, response of listing and updating posts
const router: Router = express.Router();
router.get("/", list);
router.put("/", update);

export default router;
