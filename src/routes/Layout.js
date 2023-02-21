import { useState } from "react";
import Chat from "./../components/Chat";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";
import { ChatsProvider } from "../context/chatsContext";
import {ChatCurrentProvider} from "../context/chatCurrentContext";
// import { useAuth } from "../context/authContext";

// import {getToken, onMessage} from "firebase/messaging";
// import {messaging} from "./../firebase/firebaseConfig";
// import {ToastContainer, toast} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
    const [navbarisActive, changeNavbarisActive] = useState(false);
    const [sidebarActive, changeSidebarActive] = useState(true);
    const [sideProfileActive, changeSideProfileActive] = useState(false);

    // const userCurrent = 
    // const usuario = useAuth();

    // console.log(usuario);

    // console.log(messaging)
    // const activarMensajes = async ()=> {
    //     const token = await getToken(messaging,{
    //       vapidKey: "BCY_f-LinFeR5h-f2ireh3tWcJBykXvj-LsozvmrrdPM__64qVmErDSWwd93G9y24tPfQQFh7Vl4VeLiYKhc1d0"
    //     }).catch(error => console.log("Tuviste un error al generar el token, papá"));
      
      
    //     if(token) console.log("tu token:",token);
    //     if(!token) console.log("no tienes token, rey");
    //   }

    //   activarMensajes();

    // useEffect(()=>{
    //     onMessage(messaging, message=>{
    //       console.log("tu mensaje:", message);
    //       toast(message.notification.title);
        
    //     })
        
        
    //     }, []);
    return(
        <ChatsProvider>
            {/* <ToastContainer /> */}
            <ChatCurrentProvider>
                <Navbar 
                    navbarisActive={navbarisActive}
                    changeNavbarisActive={changeNavbarisActive}
                    changeSideProfileActive={changeSideProfileActive}
                />
                    
                <Sidebar 
                    navbarisActive={navbarisActive}
                    changeNavbarisActive={changeNavbarisActive}
                    sidebarActive={sidebarActive}
                    changeSidebarActive={changeSidebarActive}
                    sideProfileActive={sideProfileActive}
                    changeSideProfileActive={changeSideProfileActive}
                />
                <Chat 
                    changeSidebarActive={changeSidebarActive}
                />
            </ChatCurrentProvider>
        </ChatsProvider>
    )
}

export default Layout;