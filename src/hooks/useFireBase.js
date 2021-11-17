import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()=>{
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState('');

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();

 const registerUser=(email, password, name, history)=>{
     setIsLoading(true);
     createUserWithEmailAndPassword(auth, email, password) 
     .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
//Save User to the database
      saveUser(email, name, 'POST');
//send name to firebase after Creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
 }

 const loginUser = (email, password, location, history) =>{
     setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
        setAuthError('');
    })
    .catch((error) => {
        setAuthError(error.message); 
    }) 
    .finally(() => setIsLoading(false));
}

    const signInWithGoogle = (location, history) =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user; 
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError(''); 
        const destination = location?.state?.from || '/';
        history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
    }


 //Observer User State
 useEffect(()=>{
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return()=> unsubscribe; 
 },[])
 
 const logOut = () =>{
     setIsLoading(true);
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=> setIsLoading(false))
 }

  const saveUser = (email, displayName, method)=>{
    const user = {email, displayName};
    fetch('http://localhost:5000/users',{
      method:method,
      headers:{
        'content-type': 'application.json'
      },
      body: JSON.stringify(user)
    })
  }
 return{
     user,
     isLoading,
     registerUser,
     loginUser,
     signInWithGoogle,
     authError,
     logOut
 }
}

export default useFirebase;