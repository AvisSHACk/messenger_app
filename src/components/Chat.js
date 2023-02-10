import Message from "./Message";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import filterNameContact from "../utils/filterNameContact";
import { useEffect, useRef} from "react";
import FormSend from "./FormSend";
import useGetMessages from "../hooks/useGetMessages";
import useGetChatCurrent from "../hooks/useGetChatCurrent";

const Chat = ({changeSidebarActive, userLogged}) => {

    const {chatCurrent} = useGetChatCurrent();
    const [messages, loading] = useGetMessages(chatCurrent?.id);
    const anchor = useRef();

    useEffect(() => {
        if(!loading) {
            anchor.current.scrollIntoView()
        }
    }, [loading])


    if(!chatCurrent){
        return (
            <main className="Chat">
                <p>Hola</p>
            </main>
        )
    }


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
                {!loading ?
                    messages.map((message) => <Message message={message} userLogged={userLogged}/>)
                :
                    <div className="loader"></div>
                }
                
                <div ref={anchor}></div>
            </div>
            <FormSend chatCurrent={chatCurrent} userLogged={userLogged} anchor={anchor}/>
        </main>
     );
}
 
export default Chat;