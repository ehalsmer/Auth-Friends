import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/loginForm";
import NewFriend from "./components/newFriend";
import EditFriend from "./components/editFriend";
import PrivateRoute from "./components/privateRoute";
import Friends from "./components/friends";
import { Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
      <div className="nav">
        <Segment.Group horizontal >
          <Segment textAlign="center">
            <Link to="/login">
              <Icon name="sign-in" />
              Login
            </Link>
          </Segment>}
          <Segment textAlign="center">
            <Link to="/friends">
              <Icon name="users" />
              Friends
            </Link>
          </Segment>
          <Segment textAlign="center">
            <Link to="/newFriend">
              <Icon name="add circle" />
              Add a Friend
            </Link>
          </Segment>
        </Segment.Group>
      </div>
      
          <Route
            exact
            path="/login"
            render={props => <LoginForm {...props} />}
          />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute exact path="/newfriend" component={NewFriend} />
          <PrivateRoute path="/edit/:id" component={EditFriend} />
      </div>
    </Router>
  );
}

export default App;
