import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {NewPost} from './pages/NewPost';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/new" element={<NewPost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
