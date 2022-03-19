const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
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
    user: User
    cars: [Car]

}

`;

module.exports = typeDefs;