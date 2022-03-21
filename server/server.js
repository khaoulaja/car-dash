<<<<<<< HEAD
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require("./schemas");
=======
const path = require('path');
const express = require('express');
const {ApolloServer}= require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const {typeDefs, resolvers} = require('./schemas');
>>>>>>> 2820fb506445b258898f3cecbbff83934ee3fee7
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
<<<<<<< HEAD
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        //context: authMiddleware
    });
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

=======

// const startServer = async ()=>{
//     // create a new Apollo server and pass in our schema data
//   const server = new ApolloServer({
//     //typeDefs,
//     //resolvers,
//    // context: authMiddleware
//   });

//   //start apollo server
//   await server.start();

//   // integrate our Apollo server with the Express application as middleware
//   server.applyMiddleware({app});

//     // log where we can go to test our GQL API
//   console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);

// }

// //initialize the Apollo server
// startServer();
>>>>>>> 2820fb506445b258898f3cecbbff83934ee3fee7

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

<<<<<<< HEAD
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
=======
//serve up static assets
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
>>>>>>> 2820fb506445b258898f3cecbbff83934ee3fee7
