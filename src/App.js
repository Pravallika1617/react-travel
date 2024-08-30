import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  element={<Home />}/>
          <Route path='/services' exact  element={<Services />}/>
          <Route path='/products' exact  element={<Products />}/>
          <Route path='/sign-up' exact  element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
