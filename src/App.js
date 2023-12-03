import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import History from './components/History.js';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
   </div>
  );
}

export default App;
