import React, { createContext, useEffect, useState } from "react"
import app from "../../firebase/firebase.config"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth"

export const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loader, setLoader] = useState(true)

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const endObservation = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      endObservation()
    }
  }, [])

  const authInfo = { user, userSignUp, userLogin, setUser, loader, setLoader }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
