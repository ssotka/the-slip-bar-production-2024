import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about/About";
import RedondoBeach from "./components/RedondoBeach";
import Lomita from "./components/Lomita";
import Contact from "./components/Contact";
import Jobs from "./components/JobsPage";
import Footer from "./components/Footer";





function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/redondo-beach' component={RedondoBeach} />
        <Route path='/lomita' component={Lomita} /> 
        <Route path='/contact' component={Contact} />
        <Route path='/jobs' component={Jobs} />
        <Footer />  
      </div>
    </Router>
  );
}

export default App;