import React from "react";

const FriendCard = props => {
  return (
    <div className='friendCard'>
      <h4>{props.friend.name}</h4>
      <h5>{props.friend.email}</h5>
    </div>
  );
};

export default FriendCard;
