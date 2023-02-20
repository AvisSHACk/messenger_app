import useGetChatCurrent from "../hooks/useGetChatCurrent";
import useGetUserLogged from "../hooks/useGetUserLogged";


const Message = ({message, userLogged}) => {

    const {userPhotoProfile} = useGetUserLogged()

    const {chatCurrent} = useGetChatCurrent();

    return ( 
        <div className={message.email === userLogged.email ? 'Message' : 'Message--me'}>
            <img src={message.email === userLogged.email ? chatCurrent.profileContacto : userPhotoProfile } alt="" className="Message__profile Profile" />
            <p className={message.email === userLogged.email ? 'Message__text': 'Message__text--me'}>{message.message}</p>
        </div>
     );
}
 
export default Message;