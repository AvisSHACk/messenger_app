import Message from "./Message";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import filterNameContact from "../utils/filterNameContact";
import { useRef} from "react";
import FormSend from "./FormSend";
import useGetMessages from "../hooks/useGetMessages";

const Chat = ({changeSidebarActive, chatCurrent, userLogged}) => {

    const messages = useGetMessages(chatCurrent?.id);
    const anchor = useRef();
    
    return ( 
        <main className="Chat">
            <header className="Chat__header">
                <span 
                    className="Button--noBackground" 
                    onClick={() => changeSidebarActive(true)}
                >
                    <AiOutlineArrowLeft/>
                </span>
                <h2 className="Chat__name">
                    {chatCurrent && filterNameContact(chatCurrent.names, userLogged.name)}
                </h2>
            </header>
            <div className="Chat__messages">
                {messages && messages.map((message) => <Message message={message} userLogged={userLogged}/>)}
                
                <div ref={anchor}></div>
            </div>
            <FormSend chatCurrent={chatCurrent} userLogged={userLogged} anchor={anchor}/>
        </main>
     );
}
 
export default Chat;