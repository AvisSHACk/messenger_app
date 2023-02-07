import { useEffect, useState } from "react";
import { getUser } from "../firebase/firebaseFunctions";

const useGetUser = (email) => {
    const [user, changeUser] = useState();
    
    useEffect(() => {
        getUser(email, changeUser);
    }, [email])

    return user;
}
 
export default useGetUser;