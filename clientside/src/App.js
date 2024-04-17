import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Fotter from './Componets/Fotter';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Exsercise from './Pages/Exsercise';
import Signup from './Pages/Signup';
import Admin from './Pages/admin';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Exsercise' element={<Exsercise />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>

        <Fotter />
      </Router>

    </div>
  );
}

export default App;
