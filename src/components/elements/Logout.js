import { signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";
// import { BiLogOut } from 'react-icons/bi';

const Logout = () => {
    return ( 
        <button className="Button__logout" onClick={() => signOut(auth)}>S</button>
     );
}
 
export default Logout;