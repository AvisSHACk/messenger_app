import SideContact from "./SideContact.js";
import SideProfile from "./SideProfile.js";
import { useAuth } from "../context/authContext";


const Sidebar = ({navbarisActive, changeNavbarisActive, sidebarActive, changeSidebarActive, sideProfileActive, changeSideProfileActive}) => {
    const {user} = useAuth();
    return ( 
        <aside className={sidebarActive ? 'Sidebar active' : 'Sidebar'}>
            <SideContact 
                userCurrent={user}
                navbarisActive={navbarisActive}
                changeNavbarisActive={changeNavbarisActive}
                changeSidebarActive={changeSidebarActive}
                sidebarActive={sidebarActive}
            />

            <SideProfile active={sideProfileActive} changeSideProfileActive={changeSideProfileActive}/>
        </aside>
     );
}
 
export default Sidebar;