import { useEffect, useState } from "react";
import Chat from "./../components/Chat";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";
import { getUrlProfile } from "../firebase/firebaseFunctions";
import useGetUserLogged from "../hooks/useGetUserLogged";
import useGetChats from "../hooks/useGetChats";

const Layout = () => {
    const [navbarisActive, changeNavbarisActive] = useState(false);
    const [sidebarActive, changeSidebarActive] = useState(true);
    const [photoProfile, changePhotoProfile] = useState({});
    const [chatCurrent, changeChatCurrent] = useState();

    const user = useGetUserLogged();
    const chats = useGetChats();
    
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
            <Navbar 
                navbarisActive={navbarisActive} 
                photoProfile={photoProfile} 
                changePhotoProfile={changePhotoProfile}
                userLogged={user}
            />
            
            <Sidebar 
                chatCurrent={chatCurrent}
                navbarisActive={navbarisActive}
                changeNavbarisActive={changeNavbarisActive}
                sidebarActive={sidebarActive}
                changeSidebarActive={changeSidebarActive}
                chats={chats}
                changeChatCurrent={changeChatCurrent}
                userLogged={user}
            />
            <Chat changeSidebarActive={changeSidebarActive} chatCurrent={chatCurrent} userLogged={user}/>
        </>
    )
}

export default Layout;