import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './friendCard';


const Friends = (props) => {
    console.log('props in Friends', props)
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
            {friends.length == 0 && <Loader type="Circles" color="#204963" height="60" width="60" />}
            {friends.map((friend)=><FriendCard friend={friend} history={props.history}/>)}
        </div>
    )
}

export default Friends;