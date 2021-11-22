import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import './SCSS/app.scss';

import {Login} from './pages/Login';
import {NewPost} from './pages/NewPost';
import {EditPost} from './pages/EditPost';
import Dashboard from './pages/Dashboard';
import PostDetails from './pages/PostDetails'


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="post/new" element={<NewPost/>}/>
            <Route path="post/edit/:id" element={<EditPost/>}/>
            <Route path="post/details/:id" element={<PostDetails/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
  );
}

export default App;
