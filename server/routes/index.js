const express = require('express');
const { ListModel } = require('../model');

const router = express.Router();

router.get("/test", (req, res) => {
    res.sendStatus(200);
})

router.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.sendStatus(400);
    }

    
})

module.exports = router;