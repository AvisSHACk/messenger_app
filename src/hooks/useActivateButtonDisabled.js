import { useEffect } from "react";

const useActivateButtonDisabled = (message, changesendDisabled) => {
    useEffect(() => {
        if(message === '') {
            changesendDisabled(true);
            return;
        }
    
        changesendDisabled(false);
    }, [message, changesendDisabled])
}
 
export default useActivateButtonDisabled;