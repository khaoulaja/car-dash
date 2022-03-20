const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v password')
                .populate('email')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        },
        cars: async () => {
            return User.find()
                .select('-__v -password')

        },
    }
};

module.exports = resolvers;