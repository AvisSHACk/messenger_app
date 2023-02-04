import Contact from "./Contact.js";
import Input from "./elements/Input.js";
import { BsFillGearFill } from 'react-icons/bs';

const Sidebar = ({navbarisActive, changeNavbarisActive}) => {
    return ( 
        <aside className="Sidebar">
            <h3 className="Sidebar__title">Chats <button className="Sidebar__openconfig" onClick={() => changeNavbarisActive(!navbarisActive)}><BsFillGearFill/></button></h3>
            <form className="Sidebar__form Form" action="">
                <Input classname={"Form__input"} placeholder="Search..."/>
            </form>

            <div className="Sidebar__contacts">
                <Contact />
                <Contact />
                <Contact active/>
                <Contact />
                <Contact />
            </div>
        </aside>
     );
}
 
export default Sidebar;