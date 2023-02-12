import { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { MdTagFaces } from 'react-icons/md';
import { addMessage } from '../firebase/firebaseFunctions';
import activateButtonDisabled from '../utils/activateButtonDisabled';
import filterNameContact from '../utils/filterNameContact';
const FormSend = ({chatCurrent, userLogged, anchor}) => {
    const [message, setMessage] = useState('');
    const [sendDisabled, changesendDisabled] = useState(true);
    

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
        activateButtonDisabled(e.target.value, changesendDisabled);
    }
    
    const onSend = (e) => {
        e.preventDefault();        
        const email = filterNameContact(chatCurrent.emails, userLogged.email)
        setMessage('');
        changesendDisabled(true);
        addMessage(chatCurrent.id, message, email, chatCurrent.photos);
    }

    useEffect(() => {
        anchor.current.scrollIntoView({behavior: "smooth"})
    })

    return (
        <form className="Form Form--chat" action="" onSubmit={onSend}>
            <div className="Form__write">
                <input type="text" value={message} className="Form__input" placeholder="Message" onChange={(e) => onChangeMessage(e)}/>
                <span className="Form__face"><MdTagFaces /></span>
            </div>
            <button disabled={sendDisabled} className="Form__buttonsend Button--purple"><FiSend /></button>
        </form>
    )
}

export default FormSend;