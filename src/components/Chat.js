import Message from "./Message";
import { FiSend } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Chat = ({changeSidebarActive}) => {
    return ( 
        <main className="Chat">
            <header className="Chat__header"><span className="Button--noBackground" onClick={() => changeSidebarActive(true)}><AiOutlineArrowLeft/></span> <h2 className="Chat__name">Daniela</h2></header>
            <div className="Chat__messages">
                <Message />
                <Message me/>
                <Message />
                <Message me/>
            </div>
            <form className="Form Form--chat" action="">
                <div className="Form__write">
                    <input type="text" className="Form__input" placeholder="Message"/>
                </div>
                <button className="Form__buttonsend Button--purple"><FiSend /></button>
            </form>
        </main>
     );
}
 
export default Chat;