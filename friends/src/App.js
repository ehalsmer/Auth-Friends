import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/loginForm';
import NewFriend from './components/newFriend';
import PrivateRoute from './components/privateRoute';
import Friends from './components/friends';
import './App.css';

function App() {
  // const token = localStorage.getItem('token')

  return (
    <Router>
    <div className="App">
      <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/newFriend">Add a Friend</Link>
      </nav>
      <Route exact path="/login" render={(props) => (
      <LoginForm 
        {...props}
      />
      )}/>
      <PrivateRoute exact path="/friends" component={Friends}/>
      <PrivateRoute exact path="/newfriend" component={NewFriend}/>

    </div>
    </Router>
  );
}

export default App;
