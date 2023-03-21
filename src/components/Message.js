import useGetChatCurrent from "../hooks/useGetChatCurrent";


const Message = ({message, userLogged}) => {

    const {contactCurrent} = useGetChatCurrent();
    return ( 
        <div className={message.uid === userLogged.id ? 'Message--me' : 'Message'}>
            <img src={message.uid === userLogged.id ? userLogged.photo : contactCurrent.photo } alt="" className="Message__profile Profile" />
            <p className={message.uid === userLogged.id ? 'Message__text--me': 'Message__text'}>{message.message}</p>
        </div>
     );
}
 
export default Message;