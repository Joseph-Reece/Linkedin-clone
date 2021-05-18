import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed'
import Widgets from './components/widgets/Widgets'
import './App.css';
import Login from './components/auth/Login';

import dotEnv from 'dotenv'
import { auth } from './assets/firebase';

dotEnv.config()

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      
      if (userAuth) {

        console.log(userAuth)

        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          profile: userAuth.photoURL,
          name: userAuth.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })

  }, [dispatch])
  

  return (
    <div className="app">
      <Header />

      { !user ? (

        <Login />

      ) : (

        <div className="body__main">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>

      )}


    </div>
  );
}

export default App;
