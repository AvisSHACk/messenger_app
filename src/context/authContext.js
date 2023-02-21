import { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../firebase/auth";
import { getUrlProfile, getUserLogged } from "../firebase/firebaseFunctions";

const AuthContext = createContext();
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, changeUsuario] = useState();
    const [loading, changeLoading] = useState(true);
    const [userCollection, changeUserCollection] = useState();
    const [userPhotoUrl, changeUserPhotoUrl] = useState();

    useEffect(() => {
        const cancelarSuscripcion = onAuthStateChanged(auth, async (userCurrent) => {

            changeUsuario(userCurrent);
            if(userCurrent) {
                await getUserLogged(userCurrent, changeUserCollection);
                let urlProfile = await getUrlProfile(userCurrent.uid);
                changeUserPhotoUrl(urlProfile);
            }

            changeLoading(false);
        })

        return cancelarSuscripcion;
    }, [user])
    return ( 

        <AuthContext.Provider value={{user: user, userCollection, userPhotoUrl, changeUserPhotoUrl}}>

            {!loading && children}

        </AuthContext.Provider>

    );
}
 
export {AuthContext, useAuth, AuthProvider};

// import { createContext, useContext, useEffect, useState } from "react";
// import { auth, onAuthStateChanged } from "../firebase/auth";
// import { getUserLogged, getUserLoggedd } from "../firebase/firebaseFunctions";

// const AuthContext = createContext();
// const useAuth = () => {
//     return useContext(AuthContext);
// }

// const AuthProvider = ({children}) => {
//     const [user, changeUsuario] = useState();
//     const [loading, changeLoading] = useState(true);
//     const [userCollection, changeUserCollection] = useState();
//     // const [userPhotoUrl, changeUserPhotoUrl] = useState();

//     useEffect(() => {
//         const cancelarSuscripcion = onAuthStateChanged(auth, async (userCurrent) => {
//             if(userCurrent) {
//                 const colection = await getUserLoggedd(userCurrent);
//                 const userCollection = {...userCurrent, ...colection}
//                 changeUsuario(userCollection);
//             } else {
//                 changeUsuario(userCurrent);
//             }

//             changeLoading(false);
//         })

//         return cancelarSuscripcion;
//     }, [])
    
//     return ( 

//         <AuthContext.Provider value={{user: user, userCollection }}>

//             {!loading && children}

//         </AuthContext.Provider>

//     );
// }
 
// export {AuthContext, useAuth, AuthProvider};