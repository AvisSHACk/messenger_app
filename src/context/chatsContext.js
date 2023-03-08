import { createContext, useEffect, useState } from "react";
import { getChats } from "../firebase/firebaseFunctions";
import { useAuth } from "./authContext";

const ChatsContext = createContext();

const ChatsProvider = ({children}) => {
    const [chats, setChats] = useState([]);
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getChats(setChats, user.uid ,setLoading);

    }, [user])
    return (
        <ChatsContext.Provider value={{chats, loading}}>
            {children}
        </ChatsContext.Provider>
    )
}
 
export {ChatsContext, ChatsProvider};