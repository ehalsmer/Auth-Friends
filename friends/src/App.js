import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/loginForm';
import PrivateRoute from './components/privateRoute';
import Friends from './components/friends';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
      </nav>
      <Route exact path="/login" component={LoginForm}/>
      <PrivateRoute exact path="/friends" component={Friends}/>

    </div>
    </Router>
  );
}

export default App;
