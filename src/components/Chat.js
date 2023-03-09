import Message from "./Message";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useEffect, useRef} from "react";
import FormSend from "./FormSend";
import useGetMessages from "../hooks/useGetMessages";
import useGetChatCurrent from "../hooks/useGetChatCurrent";
import { useAuth } from "../context/authContext";

const Chat = ({changeSidebarActive}) => {

    const {chatCurrent, contactCurrent} = useGetChatCurrent();
    const [messages, loading] = useGetMessages(chatCurrent?.id);
    const anchor = useRef();

    const {userCollection} = useAuth();

    useEffect(() => {
        if(!loading) {
            anchor.current.scrollIntoView()
        }
    }, [loading])

    console.log(chatCurrent);
    if(!chatCurrent){
        return (
            <main className="Chat">
                <div className="Chat__welcome">
                    <p>Bienvenido a mi app xd, esto aun esta en desarrollo, PD: se vienen cositas</p>
                </div>
            </main>
        )
    }

    return ( 
        <main className="Chat">
            <header className="Chat__header">
                <span 
                    className="Chat__arrowLeft Button--noBackground" 
                    onClick={() => changeSidebarActive(true)}
                >
                    <AiOutlineArrowLeft/>
                </span>
                <h2 className="Chat__name">
                    {contactCurrent && contactCurrent.name}
                </h2>
            </header>
            <div className="Chat__messages">
                {!loading ?
                    messages.map((message) => <Message key={message.id} message={message} userLogged={userCollection}/>)
                :
                    <div className="loader"></div>
                }
                
                <div ref={anchor}></div>
            </div>
            <FormSend chatCurrent={chatCurrent} userLogged={userCollection} anchor={anchor}/>
        </main>
     );
}
 
export default Chat;