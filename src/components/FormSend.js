import { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { addMessage } from '../firebase/firebaseFunctions';
import filterNameContact from '../utils/filterNameContact';
const FormSend = ({chatCurrent, userLogged, anchor}) => {
    const [message, setMessage] = useState('');

    const onSend = (e) => {
        e.preventDefault();
        const email = filterNameContact(chatCurrent.emails, userLogged.email)
        setMessage('');
        addMessage(chatCurrent.id, message, email, chatCurrent.photos);
    }

    useEffect(() => {
        anchor.current.scrollIntoView({behavior: "smooth"})
    })

    return (
        <form className="Form Form--chat" action="" onSubmit={onSend}>
            <div className="Form__write">
                <input type="text" value={message} className="Form__input" placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button className="Form__buttonsend Button--purple"><FiSend /></button>
        </form>
    )
}

export default FormSend;