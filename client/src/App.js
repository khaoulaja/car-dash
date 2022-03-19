import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <div>
    <Header/>
    <CarForm/>
    <Footer/>
    </div>
  );
}

export default App;
