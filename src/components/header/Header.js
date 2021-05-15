import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';

import './Header.css'
import NavLinks from './NavLinks';
import { useDispatch } from 'react-redux';
import { auth } from '../../assets/firebase';
import { logout } from '../../features/userSlice';

const Header = () => {
    const dispatch = useDispatch()

    const logoutApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" placeholder="search" />
                </div>
            </div>

            <div className="header__right">
                <NavLinks title="Home" Icon={HomeRoundedIcon} />
                <NavLinks title="My Network" Icon={SupervisorAccountRoundedIcon} />
                <NavLinks title="Jobs" Icon={BusinessCenterIcon} />
                <NavLinks title="Messaging" Icon={MessageRoundedIcon} />
                <NavLinks title="Notifications" Icon={NotificationsRoundedIcon} />
                <NavLinks
                    title="Me"
                    avatar="https://images.pexels.com/photos/7532775/pexels-photo-7532775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    onClick={logoutApp}
                />
            </div>

        </div>
    )
}

export default Header
