import { useContext } from "react";
import { ChatsContext } from "../context/chatsContext";

const useGetChats = () => {
    return useContext(ChatsContext);
}
 
export default useGetChats;