import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Friends = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log('get response', response);
            setFriends(response.data)
        })
        .catch(error => console.log('get error', error))
    }, [])
    return(
        <div>
            <h1>Friends</h1>
            {friends.map((friend)=><h3>{friend.name}</h3>)}
        </div>
    )
}

export default Friends;