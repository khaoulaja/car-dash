const { Schema, model } = require('mongoose');

const carSchema = new Schema({

    name: {
        type: String,
    },
    make: {
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: String,
    },
    color: {
        type: String,
    },
    maintenance: [],


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