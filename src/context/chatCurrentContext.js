import { createContext, useEffect, useState } from "react";
import { getUserById } from "../firebase/firebaseFunctions";
import filterChatId from "../utils/filterChatId";
import { useAuth } from "./authContext";

const ChatCurrentContext = createContext();

const ChatCurrentProvider = ({children}) => {
    const [chatCurrent, changeChatCurrent] = useState();
    const [contactCurrent, changeContactCurrent] = useState();
    const {user} = useAuth();
    useEffect(() => {
        const execute = async () => {
            if(chatCurrent?.ids){
                await getUserById(filterChatId(chatCurrent?.ids, user.uid), changeContactCurrent);
            }

        }
        execute();
    }, [chatCurrent?.ids, user])
    
    return (
        <ChatCurrentContext.Provider value={{chatCurrent, changeChatCurrent, contactCurrent}}>
            {children}
        </ChatCurrentContext.Provider>
    )
}
 
export {ChatCurrentContext, ChatCurrentProvider};