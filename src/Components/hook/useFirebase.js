import { useEffect, useState } from "react";
import { getAuth, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword } from "firebase/auth";
import initializationConfig from "../firebase/firebase.Config";


initializationConfig();
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
        })

    }
//email and password login system
    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    const loginUser=(email,password)=>{
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

    const logOut =()=>{
        signOut(auth)
        .then(()=>{

        })
    }
    useEffect(()=>{
       const unsubcribe= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
                setUser({});
            }

        });
        return ()=> unsubcribe;
    },[])

    
    return{
        user,
        signInUsingGoogle,
        registerUser,
        loginUser,
        logOut
    }

}
export default useFirebase;