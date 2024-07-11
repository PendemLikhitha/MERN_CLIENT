import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Home from './components/home';

import './index.css';
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <div>
       <Router>
          <Navbar/>
          <Home/>
          <Routes>
               <Route path="/register" element={<Register/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/logout" element={<Logout/>}/>
          </Routes>
       </Router>
     </div>
);


