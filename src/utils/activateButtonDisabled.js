const activateButtonDisabled = (message, changesendDisabled) => {
    console.log(message)
    if(message === '') {
        changesendDisabled(true);
        return;
    }

    changesendDisabled(false);
}
 
export default activateButtonDisabled;