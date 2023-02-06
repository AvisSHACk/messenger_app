import Message from "./Message";
// import { FiSend } from 'react-icons/fi';
// import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Chat = ({changeSidebarActive}) => {
    return ( 
        <main className="Chat">
            <header className="Chat__header"><button className="Button__return" onClick={() => changeSidebarActive(true)}>Re</button> <h2 className="Chat__name">Daniela</h2></header>
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
                <button className="Form__buttonsend Button--purple">S</button>
            </form>
        </main>
     );
}
 
export default Chat;