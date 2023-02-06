import Contact from "./Contact.js";
import Input from "./elements/Input.js";
// import { BsFillGearFill } from 'react-icons/bs';

const Sidebar = ({chatCurrent, navbarisActive, changeNavbarisActive, sidebarActive, changeSidebarActive, chats, changeChatCurrent}) => {
    return ( 
        <aside className={sidebarActive ? 'Sidebar active' : 'Sidebar'}>
            <h3 className="Sidebar__title">Chats <button className="Sidebar__openconfig" onClick={() => changeNavbarisActive(!navbarisActive)}>C</button></h3>
            <form className="Sidebar__form Form" action="">
                <Input classname={"Form__input"} placeholder="Search..."/>
            </form>
            <div className="Sidebar__contacts">
                { chats.map((chat) => {
                    return <Contact chat={chat} active={chat.id === chatCurrent?.id} changeChatCurrent={changeChatCurrent} changeSidebarActive={changeSidebarActive}/>
                })}
            </div>
        </aside>
     );
}
 
export default Sidebar;