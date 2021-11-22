import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

import './App.css';

import {Login} from './pages/Login';
import {NewPost} from './pages/NewPost';
import Dashboard from './pages/Dashboard';
import PostDetails from './pages/PostDetails'


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="new-post" element={<NewPost/>}/>
            <Route path="details/:id" element={<PostDetails/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
  );
}

export default App;
