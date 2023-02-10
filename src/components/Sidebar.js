import Contact from "./Contact.js";
import Input from "./elements/Input.js";
import filterChatsUser from "../utils/filterChatsUser.js";
import { BsFillGearFill } from 'react-icons/bs';
import useGetChats from "../hooks/useGetChats.js";
import useGetChatCurrent from "../hooks/useGetChatCurrent.js";

const Sidebar = ({navbarisActive, changeNavbarisActive, sidebarActive, changeSidebarActive, userLogged}) => {
    
    const {chats, loading} = useGetChats();
    const {chatCurrent} = useGetChatCurrent();

    
    
    return ( 
        <aside className={sidebarActive ? 'Sidebar active' : 'Sidebar'}>
            <h3 className="Sidebar__title">
                Chats 
                <button className="Button--noBackground" onClick={() => changeNavbarisActive(!navbarisActive)}><BsFillGearFill /></button>
            </h3>
            <form className="Sidebar__form Form" action="">
                <Input classname={"Form__input"} placeholder="Search..."/>
            </form>
            <div className="Sidebar__contacts">
                { userLogged && !loading ? filterChatsUser(chats, userLogged).map((chat) => {
                                return <Contact 
                                            userLogged={userLogged} 
                                            chat={chat} 
                                            active={chat.id === chatCurrent?.id} 
                                            changeSidebarActive={changeSidebarActive}
                                        />
                                })
            
                :
                <h3 className="Sidebar__title">
                    <div className="loader"></div>
                </h3>
            }
            </div>
        </aside>
     );
}
 
export default Sidebar;