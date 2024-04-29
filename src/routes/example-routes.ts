import express from "express";
import { getExample } from "../controllers/example-controller";
const router = express.Router();

router.get("/", getExample);

export default router;
