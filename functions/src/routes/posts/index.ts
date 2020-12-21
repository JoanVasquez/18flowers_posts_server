import express, { Router } from "express";
import list from "./list";
import update from "./update";

const router: Router = express.Router();
router.get("/", list);
router.put("/", update);

export default router;
