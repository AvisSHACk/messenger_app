const Message = ({message, userLogged}) => {
    return ( 
        <div className={message.email === userLogged.email ? 'Message' : 'Message--me'}>
            <img src={message.photos} alt="" className="Message__profile Profile" />
            <p className={message.email === userLogged.email ? 'Message__text': 'Message__text--me'}>{message.message}</p>
        </div>
     );
}
 
export default Message;