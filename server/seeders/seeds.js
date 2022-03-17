const faker = require('faker');

const db = require('../config/connection');
const { User, Car } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    await Car.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

    // create car
    for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let carId = userId;

        while (carId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            carId = createdUsers.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { car: carId } });
    }
});
