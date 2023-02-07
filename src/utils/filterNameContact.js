const filterNameContact = (names, nameLogged) => {
    return names.filter((name) => name !== nameLogged)[0];
}
 
export default filterNameContact;