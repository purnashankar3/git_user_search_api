import React from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from "./Components/Profile"
import Search from "./Components/Search"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Profile />
      {/* <Search/> */}
      <Footer/>
    </div>
  );
}

export default App;
