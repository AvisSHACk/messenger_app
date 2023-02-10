import useGetChatCurrent from "../hooks/useGetChatCurrent";
import filterNameContact from "../utils/filterNameContact";

const Contact = ({userLogged, chat, active, changeSidebarActive}) => {
    const {changeChatCurrent} = useGetChatCurrent();
    
    const handleClick = (chat) => {
        changeChatCurrent(chat);
        changeSidebarActive(false);
    }
    
    return ( 
        <div className={active ? 'Contact active' : 'Contact' } onClick={() => handleClick(chat)}>
            <img className="Contact__profile" src={chat.photos} alt="" />
            <div className="Contact__info">
                <h4 className="Contact__name">{filterNameContact(chat.names, userLogged.name)}</h4>
                <p className="Contact__lastmessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
     );
}

export default Contact;