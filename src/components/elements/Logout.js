import { signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { BiLogOut } from 'react-icons/bi';

const Logout = () => {
    return ( 
        <span className="Button--purple" onClick={() => signOut(auth)}><BiLogOut /></span>
     );
}
 
export default Logout;