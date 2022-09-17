import React from 'react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import { UserAuth } from '../context/AuthContext'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
      if(user != null) {
        navigate('/chat')
      }
    }, [user])

  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Chat App</h2>

        <div className='login-button google' onClick={handleGoogleSignIn}>
            <GoogleOutlined></GoogleOutlined> Sign in with Google
        </div>

        <br></br> <br></br>

        <div className='login-button google'>
            <FacebookOutlined></FacebookOutlined> Sign in with Facebook
        </div>
      </div>
    </div>
  )
}


// mailtest12389@gmail.com
// mailtest6