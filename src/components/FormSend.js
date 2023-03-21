import { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { MdTagFaces } from 'react-icons/md';
import { addMessage } from '../firebase/firebaseFunctions';
import useActivateButtonDisabled from '../hooks/useActivateButtonDisabled';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const FormSend = ({chatCurrent, userLogged, anchor}) => {
    const [message, setMessage] = useState('');
    const [sendDisabled, changesendDisabled] = useState(true);
    const [pickerDisabled, changePickerDisabled] = useState(true);
    
    useActivateButtonDisabled(message, changesendDisabled);

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
        changePickerDisabled(true);
    }
    
    const onSend = (e) => {
        e.preventDefault();
        setMessage('');
        changesendDisabled(true);
        addMessage(chatCurrent.id, message, userLogged.id, userLogged.photo);
    }

    useEffect(() => {
        anchor.current.scrollIntoView({behavior: "smooth"})
    })

    const insertEmoji = (e) => {
        setMessage(prevStr => prevStr + e.native);
    }
    return (
        <>
            <form className="Form Form--chat" action="" onSubmit={onSend}>
                <div className="Form__write">
                    {!pickerDisabled && 
                        <div className="SelectPicker">
                            <Picker data={data} onEmojiSelect={insertEmoji} locale={"es"}/>
                        </div>
                    }
                    <input type="text" value={message} className="Form__input" placeholder="Message" onChange={(e) => onChangeMessage(e)}/>
                    <span className="Form__face" onClick={() => changePickerDisabled(!pickerDisabled)}><MdTagFaces /></span>
                </div>
                <button disabled={sendDisabled} className="Form__buttonsend Button--purple"><FiSend /></button>
            </form>
        </>
    )
}

export default FormSend;