import React, { useState } from "react";
import axios from 'axios';
import { Input, Button } from 'semantic-ui-react'


const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
      username: "",
      password: ""
  })


  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  }
  const login = (e) => {
    e.preventDefault();
    // console.log('make axios call with these credentials', credentials)
    axios.post('http://localhost:5000/api/login', credentials)
    .then(response => {
        //response.data.payload is the token
        // console.log('response', response);
        localStorage.setItem('token', response.data.payload)
        props.history.push('/friends')

    })
    .catch(error => console.log('Error:', error.response.data.error))
  }

  return (
    <form onSubmit={login}>
      <Input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
