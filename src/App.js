import './App.css';
import React from 'react';

import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <React.Fragment>
      <Router>
      <Nav/>
      <Main/>
      <Footer/>
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
