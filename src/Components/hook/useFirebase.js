import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
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
        logOut
    }

}
export default useFirebase;