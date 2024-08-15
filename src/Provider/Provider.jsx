import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import axios from "axios";


export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [user, setUser] = useState([])
   const [loadedPosts, setLoadedPosts] = useState([])

   useEffect(() => {
      axios.get('https://blogy-server.vercel.app/posts')
         .then(data => setLoadedPosts(data.data))

      const unSubscribe = onAuthStateChanged(auth, newUser => {
         setUser(newUser)
      })

      return () => {
         unSubscribe()
      }
   }, [])

   const googleLogin = provider => {
      return signInWithPopup(auth, provider)
   }

   const logOut = () => {
      return signOut(auth)
   }

   const info = {user, googleLogin, logOut, loadedPosts}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;