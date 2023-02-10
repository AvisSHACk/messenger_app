import { useContext } from "react";
import { ChatCurrentContext } from "../context/chatCurrentContext";

const useGetChatCurrent = () => {
    return useContext(ChatCurrentContext);
}
 
export default useGetChatCurrent;