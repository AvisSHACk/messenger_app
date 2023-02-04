import Message from "./Message";
import { FiSend } from 'react-icons/fi';

const Chat = () => {
    return ( 
        <main className="Chat">
            <header className="Chat__header"><h2 className="Chat__name">Daniela</h2></header>
            <div className="Chat__messages">
                <Message />
                <Message me/>
                <Message />
                <Message me/>
            </div>
            <form className="Form Form--chat" action="">
                <div className="Form__write">
                    <input type="text" className="Form__input" placeholder="Message"/>
                    <button className="Form__buttonvoice Button--accent">M</button>
                </div>
                <button className="Form__buttonsend Button--purple"><FiSend /></button>
            </form>
        </main>
     );
}
 
export default Chat;