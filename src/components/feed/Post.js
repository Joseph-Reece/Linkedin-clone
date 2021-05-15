import React from 'react'
import { Avatar } from '@material-ui/core'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'

import InputOption from './InputOption'

import './post.css'

const Post = ({ message, user, }) => {
    

    return (
        <div className="post" >
            <div className="post__header">
            <Avatar className="post__headerAvatar" src={user.profile} /> 
                <div className="post__info">
                    <h2>{user.name}</h2>
                    <p>{ user.job}</p>
                </div>
            </div>

            <div className="post__body">
                <p>
                    {message}
                </p>
            </div>

            <div className="feed__inputOptions">
                <InputOption Icon={ThumbUpOutlined} title="Like" color="gray" />
                <InputOption Icon={CommentOutlined} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlined} title="Share" color="gray" />
                <InputOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
            
        </div>
    )
}

export default Post
