import { useState } from "react";
import Chat from "./../components/Chat";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";
import useGetUserLogged from "../hooks/useGetUserLogged";
import { ChatsProvider } from "../context/chatsContext";
import {ChatCurrentProvider} from "../context/chatCurrentContext";
const Layout = () => {
    const [navbarisActive, changeNavbarisActive] = useState(false);
    const [sidebarActive, changeSidebarActive] = useState(true);

    const user = useGetUserLogged();


    return(
        <ChatsProvider>
            <Navbar 
                navbarisActive={navbarisActive}
                userLogged={user}
            />
                
            <ChatCurrentProvider>
                <Sidebar 
                    navbarisActive={navbarisActive}
                    changeNavbarisActive={changeNavbarisActive}
                    sidebarActive={sidebarActive}
                    changeSidebarActive={changeSidebarActive}
                    userLogged={user}
                />
                <Chat 
                    changeSidebarActive={changeSidebarActive} 
                    userLogged={user}
                />
            </ChatCurrentProvider>
        </ChatsProvider>
    )
}

export default Layout;