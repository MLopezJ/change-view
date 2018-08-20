import React, { Component } from 'react';
import './App.css';

import NavBar from "../src/containers/NavBar";
import AppRoutes from './routes';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <NavBar/>
         <AppRoutes/>
         <Footer/>
      </div>
    );
  }
}

export default App;
