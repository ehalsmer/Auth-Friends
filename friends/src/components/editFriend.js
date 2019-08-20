import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditFriend = props => {
  const id = props.match.params.id;
  const [friend, setFriend] = useState({ name: "" });
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
    <div>
      <h1>Edit {friend.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={editedFriend.name}
          onChange={handleChange}
          placeholder={friend.name}
        />
        <input
          type="number"
          name="age"
          value={editedFriend.age}
          onChange={handleChange}
          placeholder={friend.age}
        />
        <input
          type="text"
          name="email"
          value={editedFriend.email}
          onChange={handleChange}
          placeholder={friend.email}
        />
        <button>Submit</button>
      </form>
        <button onClick={removeFriend}>Remove Friend</button>
    </div>
  );
};

export default EditFriend;
