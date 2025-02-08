import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home_page, MainContent, Navbar} from './Components/Home_page'
import SignIn from './Components/signup';
import Popup from './Components/createAccount';

function App() {
 

  return (
    <>
      <div className='App'>
      <Router>
      <div className='App'>
        
        <Home_page />
        <MainContent />
        <Navbar />
        

       
        <Routes>
       
          <Route path="/popup" element={<Popup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
      </div>
    </>
  )
}

export default App
