const db = require('../config/connection');
const { User } = require('../models');
const Car = require('../models/Car');

db.once('open', async () => {
    await User.deleteMany({});

    await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password12345',
    },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@example.com',
            password: 'password12345',
        },
        {
            firstName: 'Cabbage',
            lastName: 'Patch',
            email: 'cabbagep@example.com',
            password: 'password12345',
        });
    console.log('users seeded');

    await Car.deleteMany({});

    const categories = await Car.insertMany([
        {

            name: 'Sedan',
            make: 'Chevrolet',
            model: 'Malibu',
            year: '2019',
            color: 'red'
        },
        {

            name: 'SUV',
            make: 'Cadillac',
            model: 'Escalade',
            year: '2016',
            color: 'black'
        },
        {

            name: 'Pickup',
            make: 'Ford',
            model: 'F-150',
            year: '2017',
            color: 'blue'
        },
        {

            name: 'Minivan',
            make: 'Chrysler',
            model: 'Pacifica',
            year: '2018',
            color: 'white'
        },
        {

            name: 'Coupe',
            make: 'Audi',
            model: 'A5 Coupe Prestige',
            year: '2020',
            color: 'gray'
        },
        {

            name: 'SUV',
            make: 'Nissan',
            model: 'Murano',
            year: '2015',
            color: 'white'
        },
        {

            name: 'Sedan',
            make: 'Kia',
            model: 'Forte',
            year: '2018',
            color: 'silver'
        },
        {

            name: 'Minivan',
            make: 'Honda',
            model: 'Odyssey',
            year: '2019',
            color: 'black'
        },
        {

            name: 'Wagon',
            make: 'Jeep',
            model: 'Grand Cherokee',
            year: '2017',
            color: 'green'
        },
        {

            name: 'Convertible',
            make: 'BMW',
            model: '4 Series',
            year: '2020',
            color: 'red'
        }

    ]);

    console.log('categories seeded');

    process.exit();
});

