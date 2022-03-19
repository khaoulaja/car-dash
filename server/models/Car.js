const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    name: [
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
    maintenance: [
        {
            type: String
        }
    ],

},
    {
        toJSON: {
            getters: true
        }
    }
);

carSchema.virtual('maintenanceCount').get(function () {
    return this.maintenance.length;
});

const Car = model('Car', carSchema);

module.exports = Car;