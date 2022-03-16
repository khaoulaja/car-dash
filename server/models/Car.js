const { Schema } = require('mongoose');

const carSchema = new Schema({
    cars: [
        {
            type: String,
        },
    ],
    color: {
        type: String,
    },
    // saved car id 
    carId: {
        type: String,
        required: true,
    },
    make: {
        type: String,
    },
    model: {
        type: String,
    },
});

module.exports = carSchema;