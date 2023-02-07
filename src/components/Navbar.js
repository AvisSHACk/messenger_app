import { addChat, getUser } from "../firebase/firebaseFunctions";
import Logout from "./elements/Logout";
import { AiOutlinePlus } from 'react-icons/ai';

const NavBar = ({navbarisActive, photoProfile, userLogged}) => {

    const handleAdd = async () => {
        let newEmail = prompt('Escribe el correo');
        const [newChat] = await getUser(newEmail);
        addChat([newChat.name, userLogged.name], [userLogged.email, newChat.email,], newChat.photo);
    }
    return(
        <nav className={navbarisActive ? 'Navbar active' : 'Navbar'}>
            <span className="Button--accent" onClick={() => handleAdd()}><AiOutlinePlus/></span>
            <img className="Navbar__profile" src={photoProfile} alt="" />
            <Logout />
        </nav>
    )
}

export default NavBar;