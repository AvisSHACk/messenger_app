import { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { addMessage } from '../firebase/firebaseFunctions';
import filterNameContact from '../utils/filterNameContact';
const FormSend = ({chatCurrent, userLogged, anchor}) => {
    const [message, setMessage] = useState('');

    // async function sendPushNotification(token) {
    //     const notification = {
    //       title: "Mi título",
    //       body: "Mi cuerpo de la notificación",
    //     };
      
    //     const fetchOptions = {
    //       method: "POST",
    //       headers: {
    //         'Authorization': "Bearer AAAAGmgMSg4:APA91bH1d1XtBD_oEm1kqR9qaytID-dS6WAbm8sAlZv5hVlJV5bklKDJLz78A8X5Bh6PGORij8h3mF9Dkr2cGLVq8PTcAYBRcjoWAOz5hlvK6RxgN5BJiXkO3hMpo6qtGedZOUHACmqP",
    //         "Content-Type": "application/json"
    //       },
          
    //       body: {
    //                 "message": {
    //                 "token" : 'fK_Rryvmti8r4EROiMVu88:APA91bGhrC7EN6tXIeWxgb2N4KdbxruX5RR9OgxdaTmZDDsytzYd6YfMMvleWzvojtGFxfU2X4orPxnSReACv0vfkjsDsfaBwDi-FUNFboKI-lOfHQoXQEV93AhTAImchCGLeTVaYVcB',
    //                 "notification": notification,
    //                 "webpush": {
    //                     "headers": {
    //                             "Urgency": "high"
    //                     },
    //                     "notification": {
    //                         "body": "This is a message from FCM to web",
    //                         "requireInteraction": "true",
    //                         "badge": "/badge-icon.png"
    //                     }
    //                 }
    //             }
    //         }
    //     };
    //   console.log(fetchOptions);
    //     try {
    //       const response = await fetch(
    //         "https://fcm.googleapis.com//v1/projects/messenger-app-d655e/messages:send",
    //         fetchOptions
    //       );
    //       const data = await response.json();
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    const onSend = (e) => {
        e.preventDefault();
        const email = filterNameContact(chatCurrent.emails, userLogged.email)
        setMessage('');
        addMessage(chatCurrent.id, message, email, chatCurrent.photos);
        // sendPushNotification();

        
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