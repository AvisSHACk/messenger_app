import { createContext, useEffect, useState } from "react";
import { getUserLogged } from "../firebase/firebaseFunctions";
import { useAuth } from "./authContext";

const userCurrentContext = createContext();

const UserCurrentProvider = ({children}) => {
    const [userCurrent, changeUserCurrent] = useState();
    const {user} = useAuth();

    console.log(user);
    useEffect(() => {
        const execute = async () => {
            await getUserLogged(user, changeUserCurrent);
        }
        execute();
    }, [user])

    return (
        <userCurrentContext.Provider value={userCurrent}>
            {children}
        </userCurrentContext.Provider>
    )
}
 
export {userCurrentContext, UserCurrentProvider};