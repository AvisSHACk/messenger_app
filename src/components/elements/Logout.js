import { signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";

const Logout = () => {
    return ( 
        <button onClick={() => signOut(auth)}>C</button>
     );
}
 
export default Logout;