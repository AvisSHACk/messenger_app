import { createContext, useEffect, useState } from "react";
import { getUrlProfile, getUserLogged } from "../firebase/firebaseFunctions";
import { useAuth } from "./authContext";

const userCurrentContext = createContext();

const UserCurrentProvider = ({children}) => {
    const [userCurrent, changeUserCurrent] = useState();
    const [userPhotoProfile, setUserPhotoProfile] = useState();
    const {user} = useAuth();
    
    useEffect(() => {
        const execute = async () => {
            await getUserLogged(user, changeUserCurrent);
            let userPhoto = "";

            try {
                 userPhoto = await getUrlProfile(user.uid);
            } catch (e) {
                userPhoto = await getUrlProfile('guest.png');
            }
            setUserPhotoProfile(userPhoto);
        }
        execute();
    }, [user])
    return (
        <userCurrentContext.Provider value={{userCurrent, userPhotoProfile, setUserPhotoProfile}}>
            {children}
        </userCurrentContext.Provider>
    )
}
 
export {userCurrentContext, UserCurrentProvider};