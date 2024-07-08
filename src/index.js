import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import './index.css';
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <div>
       <Router>
          <Navbar/>
          <Routes>
               <Route path="/register" element={<Register/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/logout" element={<h1>Logout</h1>}/>
          </Routes>
       </Router>
     </div>
);


