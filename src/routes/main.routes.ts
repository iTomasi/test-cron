import { Router } from "express";
import path from "path";
import { getValue } from "../helper/converter";

const router = Router();

const viewPath = path.join(__dirname, "../../views/");

router.post("/price", (req, res) => {
    const { priceValue } = req.body;

    if (!priceValue) return res.json({ message: "Price value is missing" });

    const theValue = getValue();

    res.json({ theValue });
});

export default router;
