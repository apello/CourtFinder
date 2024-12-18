import express from "express";
import pool from "../db.js";
import { executeQuery } from "../../src/common/utils.js";

var router = express.Router();

router.get("/listings", async (req, res) => {
    const query = "SELECT * FROM listings";
    const data = await executeQuery(pool, query, []);

    if(!data) {
        return res.status(500).json({ error: "Unable to connect to network" });
    }

    res.json({ data: data });
});


export default router;