import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function Account() {

  const {user, logout} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('you are loggedout');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <Button onClick={handleLogout} variant="secondary" className='w-100'>Logout</Button>
    </div>
  )
}

export default Account