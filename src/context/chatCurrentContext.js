import { createContext, useState } from "react";

const ChatCurrentContext = createContext();

const ChatCurrentProvider = ({children}) => {
    const [chatCurrent, changeChatCurrent] = useState();
    
    return (
        <ChatCurrentContext.Provider value={{chatCurrent, changeChatCurrent}}>
            {children}
        </ChatCurrentContext.Provider>
    )
}
 
export {ChatCurrentContext, ChatCurrentProvider};