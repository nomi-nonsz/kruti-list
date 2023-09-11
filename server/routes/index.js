const express = require('express');

const router = express.Router();

router.get("/test", (req, res) => {
    res.sendStatus(200);
})

module.exports = router;