import SideContact from "./SideContact.js";
import useGetUserLogged from "../hooks/useGetUserLogged";
import SideProfile from "./SideProfile.js";


const Sidebar = ({navbarisActive, changeNavbarisActive, sidebarActive, changeSidebarActive, sideProfileActive, changeSideProfileActive}) => {
    const {userCurrent} = useGetUserLogged();
    return ( 
        <aside className={sidebarActive ? 'Sidebar active' : 'Sidebar'}>
            <SideContact 
                userCurrent={userCurrent}
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