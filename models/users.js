const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Users', dataSchema);