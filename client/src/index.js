import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home';
import FindHostel from './containers/FindHostel';
import FindRoomMate from './containers/FindRoomMate';
import Neccessary from './containers/Neccessary';
import Forum from './containers/Forum';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from './containers/Post';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />}/>
        <Route path='FindHostel' element={<FindHostel />}/>
        <Route path='FindRoomMate' element={<FindRoomMate />}/>
        <Route path='Neccessary' element={<Neccessary />}/>
        <Route path='Forum' element={<Forum />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Register' element={<Register />}/>
        <Route path='Post' element={<Post />}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
