const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    cars: [Car]
}

type Car {
    carId: ID
    name: [String]
    make: String
    model: String

}

type Query {
    users: [User]
    user(username: String!): User
    cars(make: String): [Car]

}

`;

module.exports = typeDefs;