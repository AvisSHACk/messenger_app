import { useState } from "react";
import Chat from "./../components/Chat";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";

const Layout = () => {
    const [navbarisActive, changeNavbarisActive] = useState(false);
    return(
        <>
            <Navbar navbarisActive={navbarisActive}/>
            <Sidebar navbarisActive={navbarisActive} changeNavbarisActive={changeNavbarisActive}/>
            <Chat />
        </>
    )
}

export default Layout;