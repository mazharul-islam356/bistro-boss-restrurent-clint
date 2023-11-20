import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Authentication/Firebase/firebase";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    
     // google login
     const googleLogin = () => {
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }


    const signIn = (email,pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const signUp = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }




    useEffect(()=>{
         onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user:', currentUser)
            setLoading(false)
        });
      
    },[])

    const authInfo = {
        user,
        loading,
        signIn,
        signUp,
        logOut,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;