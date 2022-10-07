import React, { Children, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

function ProtectedRoute({children}) {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  if (!user) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute