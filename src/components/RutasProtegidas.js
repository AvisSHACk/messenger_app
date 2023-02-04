import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RutasProtegidas = () => {
    const {user} = useAuth();

    if(user) {
        return <Outlet />
    } else {
        return <Navigate to={"/login"}/>
    }
}
 
export default RutasProtegidas;