import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function NavBar() {
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <div>
        <div className='flex justify-between bg-gray-200 w-full p-4'>
            <h1 className='text-center text-2x1 font-bold'>
                Firebase Test
            </h1>
            {user?.displayName ? (<button onClick={handleSignOut}>Loggout</button>) : (<Link to="/chat">Sign in</Link>)}
        </div>
    </div>
  )
}
