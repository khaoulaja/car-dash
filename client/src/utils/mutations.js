import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CAR =gql`
mutation($name: String!, $make: String!, $model: String!, $year: String!, $color: String!, $image: String){
    addCar(name: $name, make: $make, model: $model, year: $year, color: $color, image: $image) {
      _id
      name
      make
      model
      year 
      color
      image
      maintenanceCount
      maintenance
    }
  }
`;
export const DELETE_CAR =gql`
mutation($carId: ID!){
    deleteCar(carId: $carId) {
      name
      make
      model
      year 
      color
      image
      maintenanceCount
      maintenance
    }
  }
`;

export const SAVE_MAINTENANCE =gql`
mutation($carId: ID!, $type: [String]){
    saveMaintenance(carId: $carId, type: $type) {
        _id
        name
        maintenanceCount
        maintenance
    }
  }
`;
export const REMOVE_MAINTENANCE = gql`
mutation($carId: ID!, $type: String!){
    removeMaintenance(carId: $carId, type: $type) {
        _id
        name
        maintenanceCount
        maintenance
    }
  }
`;