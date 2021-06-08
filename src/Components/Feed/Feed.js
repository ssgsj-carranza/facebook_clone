import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import './Feed.css'


function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post   
                    profilePic='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    message='vacay!!!'
                    timestamp='time stamp here'
                    username='scarlet'
                    image='https://cms.qz.com/wp-content/uploads/2019/07/beachchair.jpg?quality=75&strip=all&w=410&h=240'
            />
            <Post
                    profilePic='https://images.unsplash.com/photo-1616906968825-46cef7c2a508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
                    message='Like this post'
                    timestamp='time stamp here'
                    username='alex'
            />
        </div>
    )
}

export default Feed
