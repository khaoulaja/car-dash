const { Schema, model } = require('mongoose');

const carSchema = new Schema(
    {
        name:{
                type: String,
                required: true
            },
            // saved car id 
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year:{
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        image:{
            type: String
        },
        maintenance: [
            {
                type: String
            }
        ],
        username: {
            type: String,
            required: true
          },

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