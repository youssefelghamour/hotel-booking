const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});


const Room = mongoose.model('Room', roomSchema);
module.exports = Room;