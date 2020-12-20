import express, { Router } from "express";
import list from "./list";

const router: Router = express.Router();
router.get("/", list);

export default router;
