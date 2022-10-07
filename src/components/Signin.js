import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthContext';

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const {signin} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signin(email, password)
      navigate('/account')
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Sign in to your account</h1>
      <p>Don't have an account yet? <Link to='/signup'>Sign up</Link></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
        </Form.Group>
        <Button type="submit" variant="primary" className='w-100'>Sign In</Button>
      </Form>
    </div>
  )
}

export default Signin