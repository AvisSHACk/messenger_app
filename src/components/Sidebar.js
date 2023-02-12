import Contact from "./Contact.js";
import Input from "./elements/Input.js";
import filterChatsUser from "../utils/filterChatsUser.js";
import { BsFillGearFill } from 'react-icons/bs';
import useGetChats from "../hooks/useGetChats.js";
import useGetChatCurrent from "../hooks/useGetChatCurrent.js";
import useGetUserLogged from "../hooks/useGetUserLogged";

const Sidebar = ({navbarisActive, changeNavbarisActive, sidebarActive, changeSidebarActive}) => {


    
    const {chats} = useGetChats();
    const {chatCurrent} = useGetChatCurrent();
    const userCurrent = useGetUserLogged();

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
                {!userCurrent &&
                    <h3 className="Sidebar__title">
                        <div className="loader"></div>
                    </h3>
                }

                {userCurrent && filterChatsUser(chats, userCurrent).length === 0 &&
                    <h3 className="Sidebar__title">
                        Aun no tienes contactos agregados, por favor agrega uno desde el boton con el signo mas =)
                    </h3>
                }

                {filterChatsUser(chats, userCurrent).map((chat) => {
                                return <Contact 
                                            userLogged={userCurrent} 
                                            chat={chat} 
                                            active={chat.id === chatCurrent?.id} 
                                            changeSidebarActive={changeSidebarActive}
                                            key={chat.id}
                                        />
                                })
                }
            </div>
        </aside>
     );
}
 
export default Sidebar;