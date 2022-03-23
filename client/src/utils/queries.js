import {gql} from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      carCount
      cars {
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
  }
`;

// export const QUERY_CARS =gql`
// {
//     cars{
//         _id
//         name
//         make
//         model
//         year
//         color
//         image
//         maintenanceCount
//         maintenance
//       }
// }
// `;
// export const QUERY_CAR =gql`
// query car($carId: ID!){
//     car(carId: $carId){
//         _id
//         name
//         make
//         model
//         year
//         color
//         image
//         maintenanceCount
//         maintenance
//       }
// }
// `;