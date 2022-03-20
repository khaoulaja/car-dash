const mongoose = require('mongoose');
const db = require('../config/connection');
const { Car, User } = require('../models');
var axios = require("axios").default;


mongoose.connect('mongodb://localhost:/car-dash', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Mongo connection open');
}).catch((err) => {
    console.log(err);
});

const seedUser = [
    {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password123'
    },
    {
        username: 'billyray',
        email: 'billyray@example.com',
        password: 'password123'
    },
    {
        username: 'janedoe',
        email: 'janedoe@example.com',
        password: 'password123'
    }
];
var options = {
    method: 'GET',
    url: 'https://car-data.p.rapidapi.com/cars/makes',
    headers: {
        'x-rapidapi-host': 'car-data.p.rapidapi.com',
        'x-rapidapi-key': '2d3637915emsh65be277c6079bf5p1d772bjsnd659b6d80975'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});


db.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(seedUser);
    await Car.deleteMany({});
    await Car.insertMany(options);
});

