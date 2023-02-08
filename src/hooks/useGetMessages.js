import { useEffect, useState } from "react";
import { getMessages } from "../firebase/firebaseFunctions";

const useGetMessages = (id) => {
    const [messages, setMessages] = useState();
    useEffect(() => {
        if(id) {
            console.log(id);
            getMessages(id, setMessages);
        }
    }, [id])

     return messages;
}
 
export default useGetMessages;