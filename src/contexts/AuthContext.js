import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  
  return (
    <AuthContext.Provider value={{createUser, user, logout, signin}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider