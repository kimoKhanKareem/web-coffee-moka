import React from "react";
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from "./Pages/About";
import Menu from './Pages/Menu';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Shop from "./Components/Shop/Shop";
import Footer from "./Components/Footer/Footer";


function App () {
  return (
          <div className="App">
            <Router>
                <Navbar />
                    <Routes>
                        <Route  path="/"  exact  element={ <Home /> } />
                        <Route  path="/MENU"  element={ <Menu /> } />
                        <Route  path="/SERVICES"  element={ <Services /> } />
                        <Route  path="/BLOG"  element={ <Blog /> } />
                        <Route  path="/Shop"  element={ <Shop /> } />
                        <Route  path="/ABOUT"  element={ <About /> } />
                    </Routes> 
                <Footer />    
            </Router> 
          </div>
  );
}
export default App;

