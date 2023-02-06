import { useEffect, useState } from "react";
import { getChats } from "../firebase/firebaseFunctions";

const useGetChats = () => {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        getChats(setChats);
    }, [])

    return chats;
}
 
export default useGetChats;