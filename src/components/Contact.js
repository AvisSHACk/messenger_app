import { useEffect, useState } from "react";
import { getUrlProfile } from "../firebase/firebaseFunctions";
import useGetChatCurrent from "../hooks/useGetChatCurrent";
import filterNameContact from "../utils/filterNameContact";
import filterProfileContact from "../utils/filterProfileContact";

const Contact = ({userLogged, chat, active, changeSidebarActive}) => {
    const [profileContacto, setProfileContacto] = useState();
    const {changeChatCurrent} = useGetChatCurrent();
    console.log(userLogged);
    useEffect(() => {
        const execute = async () => {
            let contactoProfile = "";

            try {
                contactoProfile = await getUrlProfile(filterProfileContact(chat.photos, userLogged.photo));
            } catch (e) {
                contactoProfile = await getUrlProfile('guest.png');
            }
            setProfileContacto(contactoProfile);
        }
        execute();
    }, [chat, userLogged])

    const handleClick = (chat) => {
        changeChatCurrent({chat, profileContacto});
        changeSidebarActive(false);
    }
    
    return ( 
        <div className={active ? 'Contact active' : 'Contact' } onClick={() => handleClick(chat)}>
            <img className="Contact__profile" src={profileContacto} alt="" />
            <div className="Contact__info">
                <h4 className="Contact__name">{filterNameContact(chat.names, userLogged.name)}</h4>
                <p className="Contact__lastmessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
     );
}

export default Contact;