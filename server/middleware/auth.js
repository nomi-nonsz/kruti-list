const { ListModel } = require('../model');

const auth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token)
        return res.sendStatus(400);

    try {
        const user = await ListModel.findOne({ token });

        if (!user)
            return res.sendStatus(403);

        next();
    }
    catch (error) {
        console.error("Auth failed");
        console.error(error);
        res.sendStatus(400);
    }
}

module.exports = auth