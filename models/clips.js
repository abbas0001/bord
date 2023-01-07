const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        require: true,
        type: String
    },
    clip1: {
        require: true,
        type: String
    },
    clip2: {
        require: true,
        type: String
    },
    clip3: {
        require: true,
        type: String
    },
    clip4: {
        require: true,
        type: String
    },
    clip5: {
        require: true,
        type: String
    },
    clip6: {
        require: true,
        type: String
    },
    clip7: {
        require: true,
        type: String
    },
    clip8: {
        require: true,
        type: String
    },
    clip9: {
        require: true,
        type: String
    },
    clip10: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('Clips', dataSchema);