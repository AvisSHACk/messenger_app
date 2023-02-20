import { useEffect, useState } from "react";
import { getMessages } from "../firebase/firebaseFunctions";

const useGetMessages = (id) => {
    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(id) {
            getMessages(id, setMessages, setLoading);
        }
    }, [id])

     return [messages, loading];
}
 
export default useGetMessages;