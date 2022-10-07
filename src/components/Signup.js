import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthContext';

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const {createUser} = useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/account')
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Sign up for free account</h1>
      <p>Already have an account yet? <Link to='/'>Sign in</Link></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary" className='w-100'>Sig Up</Button>
      </Form>
    </div>
  )
}

export default Signup