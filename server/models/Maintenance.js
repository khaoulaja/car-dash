const { Schema } = require('mongoose');

const maintenanceSchema = new Schema({
    indicators: [
        {
            type: String,
        },
    ],
},
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = maintenanceSchema;