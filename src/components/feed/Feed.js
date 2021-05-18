import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import './feed.css'
import InputOption from './InputOption';
import Post from './Post';
import {db} from '../../assets/firebase'
import firebase from 'firebase'


import {user} from '../../assets/dummyData'

const Feed = () => {
    const [postContent, setPostContent] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {

        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setPosts(snapshot.docs.map(doc => (
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                )))
            )
    }, [])

    const handleChange = e => {        
        e.preventDefault()
        
        
        // setPostContent({...postContent, [e.target.name]:  e.target.value})
        setPostContent(e.target.value)
    }
    console.log(posts)

    const handleSubmit = (e) => {
        e.preventDefault()
       /*  setPosts(posts.concat(postContent))        
        */
     
        setPostContent('') 
    }
    
    console.log(posts)
    
    return (
        <div className="feed" >
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="content" id="post" value={postContent} onChange={handleChange} />
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={InsertPhotoIcon} color= "#70b5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color= "#e7a33e" />
                    <InputOption title="Event" Icon={EventNoteIcon} color= "#c0cbcd" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color= "#7fc15e" />
                </div>
            </div>
           {
                posts.map(({id, data:{user, post}}) => (

                    <Post message={post.content} user={user} key={id} />
                )
                )
            }

        </div>
    )
}

export default Feed