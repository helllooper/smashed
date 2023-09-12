import express from "express";
import { getMerchProducts, getMerchProductById } from "../controllers/merchController.js";

const router = express.Router();


router.route("/").get(getMerchProducts);
router.route("/:id").get(getMerchProductById);


export default router;