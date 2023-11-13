import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Authentication/Firebase/firebase";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }


    const signIn = (email,pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(email,pass)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut()
    }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user:', currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;