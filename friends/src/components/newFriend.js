import React, { useState, useEffect } from "react";
import { Input, Button } from 'semantic-ui-react'
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
        <Input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <Input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <Input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Button>Add Friend</Button>
      </form>
    </div>
  );
};

export default NewFriend;
