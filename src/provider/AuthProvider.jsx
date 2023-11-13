import { createContext, useState } from "react";

const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const authInfo = {
        user,
        loading

    }
    return (
        <AuthContext.provider value={authInfo}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProvider;