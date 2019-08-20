import React from "react";

const FriendCard = props => {
  const handleClick = (e) => {
      e.preventDefault();
      props.history.push(`/edit/${props.friend.id}`)
  }

  return (
    <div onClick={handleClick} className='friendCard tooltip'>
      <h4>{props.friend.name}</h4>
      <h5>{props.friend.email}</h5>
      <span class="tooltiptext">Click to edit</span>
    </div>
  );
};

export default FriendCard;
