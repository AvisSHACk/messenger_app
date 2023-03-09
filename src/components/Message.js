import useGetChatCurrent from "../hooks/useGetChatCurrent";


const Message = ({message, userLogged}) => {

    const {contactCurrent} = useGetChatCurrent();
    return ( 
        <div className={message.email === userLogged.email ? 'Message--me' : 'Message'}>
            <img src={message.email === userLogged.email ? userLogged.photo : contactCurrent.photo } alt="" className="Message__profile Profile" />
            <p className={message.email === userLogged.email ? 'Message__text--me': 'Message__text'}>{message.message}</p>
        </div>
     );
}
 
export default Message;