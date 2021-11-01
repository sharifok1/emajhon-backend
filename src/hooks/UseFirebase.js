import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect } from "react";
import firebaseInitialize from "../Firebase/Firebase.inital";
firebaseInitialize()
const useFirebase = ()=>{
    const [user,setUser]=useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

   //************log in google */ 
    const signinWithgoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
        
    }
    //**************auth state change */
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            }
          });
    },[])
//*******************Signout */
const logOut=()=>{
    signOut(auth).then(() => {
        setUser({})
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}
    return (
        {
            signinWithgoogle,
            user,
            logOut
        }
    )
}
export default useFirebase;