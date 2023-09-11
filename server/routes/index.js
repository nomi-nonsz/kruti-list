const express = require('express');
const { ListModel } = require('../model');
const { generateToken, hashPassword, comparePassword } = require('../helper');

const router = express.Router();

router.get("/test", (req, res) => {
    res.sendStatus(200);
})

router.post("/api/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password)
            return res.sendStatus(400);

        const hashed = await hashPassword(password);
        const user = await new ListModel({
            email,
            password: hashed,
            token: null,
            lists: []
        }).save();
        const data = user.toObject();
    
        return res.status(201).json(data).end();
    }
    catch (error) {
        console.error("Register failed");
        console.error(error);
        res.sendStatus(400);
    }
});

router.get('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password)
            return res.sendStatus(400);

        const user = await ListModel.findOne({ email });

        if (!user)
            return res.sendStatus(400);
        
        const passwordValid = await comparePassword(password, user.password);

        if (!passwordValid)
            return res.sendStatus(403);
        
        const token = generateToken(80);
        const expired = new Date(Date.now() + (7 * (3600000 * 24))); // kadaluarsa seminggu

        user.token = token;
        await user.save();
        res.cookie('token', token, { expires: expired });

        return res.sendStatus(200);
    }
    catch (error) {
        console.error("Login failed");
        console.error(error);
        res.sendStatus(400);
    }
})

module.exports = router;