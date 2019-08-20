import React, { useState, useEffect } from "react";
// import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = props => {
  const [newFriend, setNewFriend] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setNewFriend({
        ...newFriend,
        [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
          console.log('post to friends response', response)
          props.history.push('/friends')
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default NewFriend;
