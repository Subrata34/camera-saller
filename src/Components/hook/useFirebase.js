import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword } from "firebase/auth";
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

    const logOut =()=>{
        signOut(auth)
        .then(()=>{

        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }

        });
    },[])

    
    return{
        user,
        signInUsingGoogle,
        registerUser,
        logOut
    }

}
export default useFirebase;