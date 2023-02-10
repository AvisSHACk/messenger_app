import { createContext, useEffect, useState } from "react";
import { getChats } from "../firebase/firebaseFunctions";

const ChatsContext = createContext();

const ChatsProvider = ({children}) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getChats(setChats, setLoading);

    }, [])

    return (
        <ChatsContext.Provider value={{chats, loading}}>
            {children}
        </ChatsContext.Provider>
    )
}
 
export {ChatsContext, ChatsProvider};