import { useEffect, useState } from "react";
import { getUserById } from "../firebase/firebaseFunctions";
import useGetChatCurrent from "../hooks/useGetChatCurrent";
import filterChatId from "../utils/filterChatId";

const Contact = ({userLogged, chat, active, changeSidebarActive}) => {
    const [contactChat, setContactChat] = useState();
    const {changeChatCurrent} = useGetChatCurrent();
    useEffect(() => {
        const execute = async () => {
            await getUserById(filterChatId(chat.ids, userLogged.uid), setContactChat);

        }
        execute();
    }, [chat, userLogged, contactChat?.photo])

    const handleClick = (chat) => {
        changeChatCurrent({chat, contactChat});
        changeSidebarActive(false);
    }
    
    return ( 
        <div className={active ? 'Contact active' : 'Contact' } onClick={() => handleClick(chat)}>
            <img className="Contact__profile" src={contactChat?.photo} alt="" />
            <div className="Contact__info">
                <h4 className="Contact__name">{contactChat?.name}</h4>
                <p className="Contact__lastmessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
     );
}

export default Contact;