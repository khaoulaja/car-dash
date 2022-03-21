import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maintenance from "./components/Maintenance";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: '/graphql',
});

//Ccreate a middleware function that will retrieve the token and combine it with the existing httpLink.
const authLink = setContext((_, { headers }) => { //underscore _ to serve as a placeholder for the first parameter.
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <div>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/addCar" component={CarForm} />
              <Route exact path="/car/:carId" component={CarList} />
              <Route exact path="/maintenance/:carId" component={Maintenance} />
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              
              <Route component={NoMatch}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
