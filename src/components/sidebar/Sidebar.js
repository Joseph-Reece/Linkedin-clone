import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

// import {user} from '../../assets/dummyData'

import './sidebar.css'
const Sidebar = () => {
    const user = useSelector(selectUser)
    console.log(user)
    const recentItem = (topic) => (

        <div className="sidebar__recentItem">
            <div className="sidebar__hash">#</div>
            <p>
                {topic}
            </p>
        </div>
    )
    return (
        <div className="sidebar">
           <div className="sidebar__top">
               <img src={user.coverImg} alt="" />
               <Avatar className="sidebar__avatar" src={user.profile} />
               <h2>{user.name}</h2>
               <h4>{user.job}</h4>
           </div>

           <div className="sidebar__stats">
               <div className="sidebar_stat">
                   <p>Who viewed your profile </p>
                   <p className="sidebar__statNumber">
                       100
                   </p>
               </div>
               <div className="sidebar_stat">
                   <p>Views of your post </p>
                   <p className="sidebar__statNumber">
                       100
                   </p>
               </div>
           </div>

           <div className="sidebar__bottom">
               <p>Recent</p>
               {recentItem(" Software Engineering ")}
               {recentItem(" Mechanical Engineering ")}
               {recentItem(" Structural Engineering ")}
               {recentItem(" Facial Reconstruction ")}
           </div>
        </div>
    )
}

export default Sidebar
