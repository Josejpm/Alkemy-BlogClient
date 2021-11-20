import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import {NewPost} from './pages/NewPost';

import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostDetails from './pages/PostDetails'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/new" element={<NewPost/>}/>
            <Route path="/details/:id" element={<PostDetails/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
