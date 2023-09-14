const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
    lists: [{
        name: { type: String },
        check: { type: Boolean }
    }]
});

const ListModel = mongoose.model('userlist', ListSchema);

module.exports = { ListModel }