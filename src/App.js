import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import TermsOfService from './Components/TermsOfService/TermsOfService'
import './App.css';
import './Stylesheets/Colors/FontColors/FontColors.css'
import './Stylesheets/Animations/keyframes.css'
import './Stylesheets/Colors/BackgroundColors/BackgroundColors.css'

function App() {
  return (
    <div className="appWrapper">
        <HashRouter basename='/'>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Footer/>
          <TermsOfService/>
        </HashRouter>
    </div>
  );
}

export default App;
