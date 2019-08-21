import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Input, Button, Segment, Form } from 'semantic-ui-react'


const EditFriend = props => {
  const id = props.match.params.id;
  const [friend, setFriend] = useState({});
  const [editedFriend, setEditedFriend] = useState(friend);
  console.log("friend in editfriend", friend);
  // console.log('props in EditFriend', props)

  const handleChange = e => {
    e.preventDefault();
    setEditedFriend({
      ...editedFriend,
      [e.target.name]: e.target.value
    });
  };

  const removeFriend = e => {
      e.preventDefault();
      if(window.confirm('Are you sure you wish to remove this friend?')){
          axiosWithAuth()
          .delete(`http://localhost:5000/api/friends/${id}`)
          .then(props.history.push('/friends'))
          .catch(err => console.log(err))
      }
  }
  const handleSubmit = e => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${id}`, editedFriend)
      .then(response => {
        console.log("response to PUT", response);
      });
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        console.log("editFriend response.data", response.data);
        setFriend(response.data);
        // setEditedFriend(response.data)
      })
      .catch(error => console.log("get error", error));
  }, []);

  return (
    <Segment raised >
      <h1>Edit {friend.name}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={editedFriend.name}
          onChange={handleChange}
          placeholder={friend.name}
        />
        <Input
          type="number"
          name="age"
          value={editedFriend.age}
          onChange={handleChange}
          placeholder={friend.age}
        />
        <Input
          type="text"
          name="email"
          value={editedFriend.email}
          onChange={handleChange}
          placeholder={friend.email}
        />
        <Button>Submit</Button>
        <Button onClick={removeFriend}>Remove Friend</Button>
      </form>
    </Segment>
  );
};

export default EditFriend;
