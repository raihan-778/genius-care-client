import React, { createContext, useEffect, useState } from "react"
import app from "../../firebase/firebase.config"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

export const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loader, setLoader] = useState(true)

  const userSignUp = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userSignout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const endObservation = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoader(false)
    })
    return () => {
      endObservation()
    }
  }, [])

  const authInfo = {
    user,
    userSignout,
    userSignUp,
    userLogin,
    setUser,
    loader,
    setLoader,
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
