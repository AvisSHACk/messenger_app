import { addChat, getUser } from "../firebase/firebaseFunctions";
import Logout from "./elements/Logout";
import { AiOutlinePlus } from 'react-icons/ai';
import { useAuth } from "../context/authContext";

const NavBar = ({navbarisActive, changeNavbarisActive, changeSideProfileActive}) => {
    
    const {user, userCollection} = useAuth();
    const handleAdd = async () => {
        let newEmail = prompt('Escribe el correo');


        if(newEmail === '') {
            alert('El campo no puede estar vacio');
            return;
        }
        
        if(newEmail === userCollection.email) {
            alert('Ingresa un correo diferente al  tuyo no seas Gil xd');
            return;
        }
        
        changeNavbarisActive(false);
        const [newChat] = await getUser(newEmail);
        addChat([newChat.id, user.uid]);
    }
    
    const handleImage = () => {
        changeSideProfileActive(true);
        changeNavbarisActive(false);
    }
    return(
        <nav className={navbarisActive ? 'Navbar active' : 'Navbar'}>
            <span className="Button--accent" onClick={() => handleAdd()}><AiOutlinePlus/></span>
            <img 
                className="Navbar__profile"
                src={userCollection?.photo}
                onClick={handleImage}
                alt=""
            />
            <Logout />
        </nav>
    )
}

export default NavBar;