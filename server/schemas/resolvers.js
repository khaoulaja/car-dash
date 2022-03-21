const { User, Car } = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')

        },
        categories: async () => {
            return await Car.find();
        },
    },
};



module.exports = resolvers;