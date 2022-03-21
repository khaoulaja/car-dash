const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        carCount: Int
        cars: [Car]
    }

    type Car {
        _id: ID
        name: String
        make: String
        model: String
        year: String
        color: String
        image:String
        maintenanceCount: Int
        maintenance: [String]
    }

    type Query {
        me: User
        user(username: String!): User
        cars: [Car]
        car(carId: ID!): Car
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!) :Auth
        addCar(name: String!, make: String!, model: String!, year: String!, color: String!): Car
        deleteCar(carId: ID!): Car
        saveMaintenance(carId: ID!, type:[String]): Car
        removeMaintenance(carId: ID!, type: String!): Car

    }
    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;