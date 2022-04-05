import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init";


const initializationConfig=()=>{
    initializeApp(firebaseConfig);
}
export default initializationConfig;