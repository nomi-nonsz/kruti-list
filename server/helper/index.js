const bcrypt = require('bcrypt');

const chars = "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890~!@#$%^&*?/@$@&&";

const generateToken = (len) => {
    let token = "";

    for (let i = 0; i < len; i++) {
        const cindex = Math.round(Math.random() * chars.length);
        token += chars[cindex];
    }

    return token;
}

const hashPassword = async (password) => {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = { generateToken, hashPassword, comparePassword };