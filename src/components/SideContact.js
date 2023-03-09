import Contact from "./Contact.js";
import Input from "./elements/Input.js";
import { BsFillGearFill } from 'react-icons/bs';
import useGetChats from "../hooks/useGetChats.js";
import useGetChatCurrent from "../hooks/useGetChatCurrent.js";
import { AiOutlineClose } from "react-icons/ai";
const SideContact = ({userCurrent, changeNavbarisActive, changeSidebarActive, navbarisActive}) => {
    const {chats, loading} = useGetChats();
    const {chatCurrent} = useGetChatCurrent();
    return ( 
        <div className="SideContact">
            <h3 className="SideContact__title">
                Chats 
                <button className="SideContact__engran Button--noBackground" onClick={() => changeNavbarisActive(!navbarisActive)}>
                    {navbarisActive ?  <AiOutlineClose/> : <BsFillGearFill /> }
                </button>
            </h3>
            <form className="SideContact__form Form" action="">
                <Input classname={"Form__input"} placeholder="Search..."/>
            </form>
            <div className="SideContact__contacts">
                

                {chats.map((chat) => {
                        return <Contact 
                                    userLogged={userCurrent} 
                                    chat={chat} 
                                    active={chat.id === chatCurrent?.id} 
                                    changeSidebarActive={changeSidebarActive}
                                    key={chat.id}
                                />
                    })
                }

                {loading &&
                    <h3 className="SideContact__title">
                        <div className="loader"></div>
                    </h3>
                }

                {!loading && chats.length === 0 &&
                    <h3 className="SideContact__title">
                        Aun no tienes contactos agregados, por favor agrega uno desde el boton con el signo mas =)
                    </h3>
                }
            </div>
        </div>
     );
}
 
export default SideContact;