const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
   
}

type Car {
    carId: ID
    name: String
    make: String
    model: String
    year: String
    color: String

}

type Query {
    users: [User]
    categories:[Car]
    

}

`;

module.exports = typeDefs;