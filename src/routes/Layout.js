import { useEffect, useState } from "react";
import Chat from "./../components/Chat";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";
import { getUrlProfile } from "../firebase/firebaseFunctions";
import useGetUserLogged from "../hooks/useGetUserLogged";

const Layout = () => {
    const [navbarisActive, changeNavbarisActive] = useState(false); 
    const [photoProfile, changePhotoProfile] = useState({});
    const user = useGetUserLogged();

    useEffect(() => {
        const execute = async () => {
            if(user) {
                changePhotoProfile(await getUrlProfile(user.photo));
            }
        }

        execute();
    }, [user])


    return(
        <>
            <Navbar navbarisActive={navbarisActive} photoProfile={photoProfile} changePhotoProfile={changePhotoProfile}/>
            <Sidebar navbarisActive={navbarisActive} changeNavbarisActive={changeNavbarisActive}/>
            <Chat />
        </>
    )
}

export default Layout;