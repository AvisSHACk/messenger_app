import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Logout = () => {
    return ( 
        <button onClick={() => signOut(auth)}>C</button>
     );
}
 
export default Logout;