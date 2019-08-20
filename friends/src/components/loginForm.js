import React, { useState } from "react";
import axios from 'axios';


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
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
