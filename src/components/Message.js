import { useAuth } from "../context/authContext";
import useGetChatCurrent from "../hooks/useGetChatCurrent";


const Message = ({message, userLogged}) => {

    const {userPhotoUrl} = useAuth()

    const {chatCurrent} = useGetChatCurrent();

    return ( 
        <div className={message.email === userLogged.email ? 'Message' : 'Message--me'}>
            <img src={message.email === userLogged.email ? chatCurrent.profileContacto : userPhotoUrl } alt="" className="Message__profile Profile" />
            <p className={message.email === userLogged.email ? 'Message__text': 'Message__text--me'}>{message.message}</p>
        </div>
     );
}
 
export default Message;