import { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../firebase/auth";

const AuthContext = createContext();
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, changeUsuario] = useState();
    const [loading, changeLoading] = useState(true);

    useEffect(() => {
        const cancelarSuscripcion = onAuthStateChanged(auth, (user) => {
            changeUsuario(user);
            changeLoading(false);
        })

        return cancelarSuscripcion;
    })
    return ( 

        <AuthContext.Provider value={{user: user}}>

            {!loading && children}

        </AuthContext.Provider>

    );
}
 
export {AuthContext, useAuth, AuthProvider};