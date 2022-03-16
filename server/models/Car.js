const { Schema, model } = require('mongoose');
const maintenanceSchema = require('./Maintenance');

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
    maintenance: [maintenanceSchema],

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