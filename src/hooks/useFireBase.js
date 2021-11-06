import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";




initializeAuthentication()

const useFirebase = ()=>{
 const [user, setUser] = useState({});

 const auth = getAuth();

 const registerUser=(email, password)=>{
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
 }

 const loginUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
 }

 //Observer User State
 useEffect(()=>{
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
            setUser({})
        }
      });
      return()=> unsubscribe
 },[])

 const logOut = () =>{
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
 }
 return{
     user,
     registerUser,
     loginUser,
     logOut
 }
}

export default useFirebase;